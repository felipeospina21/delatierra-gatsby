import React from 'react';
// import Header from './header';

// import '../../styles/layout.css';
// import styles from './layout.module.css';

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
	<div>
		{/* <Header
			siteTitle={siteTitle}
			onHideNav={onHideNav}
			onShowNav={onShowNav}
			showNav={showNav}
		/> */}
		<div>{children}</div>
	</div>
);

export default Layout;
