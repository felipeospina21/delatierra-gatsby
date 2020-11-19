import React from 'react';
import Contact from '../components/Contact/Contact';
import WhatsappBtn from '../components/Layout/WhatsappBtn';
import SEO from '../components/seo';

export default function ContactoPage() {
	return (
		<div>
			<SEO title='Contacto' />
			<WhatsappBtn />
			<Contact />
		</div>
	);
}
