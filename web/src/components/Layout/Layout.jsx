import React from 'react';
import PropTypes from 'prop-types';
import { ProductsProvider } from '../../context/ProductsContext';
import { CartProvider } from '../../context/CartContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<CartProvider>
			<ProductsProvider>
				<div>
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			</ProductsProvider>
		</CartProvider>
	);
};

Layout.propTypes = {
	children : PropTypes.node.isRequired
};

export default Layout;
