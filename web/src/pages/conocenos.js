import React from 'react';
import AboutUs from '../components/History/AboutUs';
import OurValues from '../components/History/OurValues';
import WhatsappBtn from '../components/Layout/WhatsappBtn';
import SEO from '../components/seo';

const ConocenosPage = () => (
	<div>
		<SEO title='Conócenos' />
		<WhatsappBtn/>
		<AboutUs />
		<OurValues />
	</div>
);

export default ConocenosPage;
