import React from 'react';
import {hot} from 'react-hot-loader';
import {withNamespaces} from 'react-i18next';
import {Route, Switch} from 'react-router-dom';

import CommonLayout from 'common/components/Layouts/CommonLayout';

import Home from 'pages/Home';
import Pricing from 'pages/Pricing';

const Routes = () => (
	<Switch>
		<Route
			path='/'
			render={() => (
				<CommonLayout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/pricing' component={Pricing} />
					</Switch>
				</CommonLayout>
			)}
		/>
	</Switch>
);

export default hot(module)(withNamespaces('translation')(Routes));
