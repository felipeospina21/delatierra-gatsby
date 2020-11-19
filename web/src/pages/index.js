import React from 'react';
// import { Link } from 'gatsby';
import Home from '../components/Home/Home';
import SEO from '../components/seo';

const IndexPage = props => (
	<div>
		<SEO title='Home' />
		<Home />
	</div>
);

export default IndexPage;
