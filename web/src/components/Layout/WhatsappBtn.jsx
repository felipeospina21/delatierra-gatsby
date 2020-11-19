import React from 'react';
import WhatsappLogo from '../../assets/whatsapp.svg';

import './WhatsappBtn.scss';

const WhatsappBtn = () => {
	return (
		<div className='whatsapp-btn-container'>
			<a
				href='http://api.whatsapp.com/send?phone=573054269112'
				rel='noreferrer'
				target='_blank'>
				<WhatsappLogo className='whatsapp-logo' />
				{/* < img class="whatsapp-logo" src="./images/whatsapp.svg" alt="logo whatsapp"> */}
			</a>
		</div>
	);
};

export default WhatsappBtn;
