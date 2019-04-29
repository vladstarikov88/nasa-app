import cn from 'classnames';
import React from 'react';
import {Trans} from 'react-i18next';
import {NavLink} from 'react-router-dom';

import Flex from 'common/components/Flex/Flex';

import LocaleIcon from 'assets/images/LocaleIcon';
import LogoIcon from 'assets/images/LogoIcon';

import i18n from 'locales/i18nextConfig';

import styles from './header.scss';

interface IProps {
	onToggle: () => void;
	isMenuOpen: boolean;
	isAuthenticated: boolean;
	proceedLogin: any;
}

const setLanguage = () => i18n
	.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	.catch(error => {
		if (error) return console.warn('something went wrong loading', error);
	});

const headerItems = [
	{
		path: '/',
		key: 'Home',
		id: 1,
	}, 
	{
		path: '/pricing',
		key: 'Pricing',
		id: 2,
	},
];

const URL = 'http://i.pravatar.cc/200';

const Header: React.FC<IProps> = ({onToggle, isMenuOpen, isAuthenticated}) => (
	<Flex className={styles.header}>
		{isAuthenticated && (
			<Flex
				className={cn(styles.toggle, {[styles.toggle_active]: isMenuOpen})}
				onClick={onToggle}
			>
				<div className={styles.toggle_img}>
					<span /><span /><span /><span />
				</div>
			</Flex>
		)}
		<Flex
			grow={1}
			className={cn({
				[styles.authenticated]: isAuthenticated,
				[styles.login]: !isAuthenticated,
			})}
		>
			<Flex className={styles.tabsHeader}>
				{!isAuthenticated && headerItems.map(({path, key, id}) => (
					<NavLink
						exact={path.indexOf('/registration') !== -1 ? false : true}
						key={id}
						to={path}
						className={styles.headerItem}
						activeClassName={styles.headerItem_active}
					>
						<Trans i18nKey={`Header.${key}`} />
					</NavLink>
				))}
				<div className={styles.headerItem} onClick={setLanguage}>
					<LocaleIcon className={styles.localeIcon} />
					{i18n.language.toUpperCase()}
				</div>
				{isAuthenticated &&
					<Flex alignItems='center'>
						<img className={styles.avatar} src={URL} alt='Avatar' />
					</Flex>
				}
			</Flex>
		</Flex>
	</Flex>
);

export default Header;
