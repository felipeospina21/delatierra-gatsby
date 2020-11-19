/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import './src/styles/global.scss';
import Layout from './src/components/Layout/Layout';
import 'firebase/firestore';
import 'firebase/auth';

// export const wrapRootElement = CartProvider;
export const wrapPageElement = ({ element, props }) => (
	<Layout {...props}>{element}</Layout>
);
