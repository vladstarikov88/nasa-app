import React from 'react';

import HeaderContainer from 'common/components/Header/containers/HeaderContainer';

const CommonLayout = ({children}: any) => (
	<div>
		<HeaderContainer />
		{children}
	</div>
);

export default CommonLayout;
