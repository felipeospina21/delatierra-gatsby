import React from 'react';
import { FaFacebookSquare as FbLogo } from 'react-icons/fa';
import { FaInstagram as InstaLogo } from 'react-icons/fa';

import './Footer.scss';

export default function Footer() {
	return (
		<div>
			<div className='footer'>
				<div className='footer-contact'>
					<p>Medellin, Colombia</p>
					<p>305 4269 112</p>
				</div>
				<div className='social-logos-wrapper'>
					<a
						href='https://instagram.com/delatierra.tallersaludable?igshid=nnjvfhzgxps1'
						rel='noreferrer'
						target='_blank'>
						<InstaLogo className='social-logos' />
					</a>
					<a
						href='https://facebook.com/De-La-Tierra-Taller-saludable-100453998403299'
						rel='noreferrer'
						target='_blank'>
						<FbLogo className='social-logos' />
					</a>
				</div>
			</div>
			<div className='created-by'>Creado por Felipe Ospina</div>
		</div>
	);
}
