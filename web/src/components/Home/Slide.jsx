import React from 'react';
import Image from '../image';

import './Slide.scss';

const Slide = ({ src, text }) => {
	return (
		<div className='mySlides '>
			<Image className='slide-img' src={src} alt='Fotos de comida saludable' />
			<div className='slide-text'>{text}</div>
		</div>
	);
};

export default Slide;
