import React, { useState } from 'react';
import { FaChevronLeft as LeftArrow } from 'react-icons/fa';
import { FaChevronRight as RightArrow } from 'react-icons/fa';
import Thumbnail from './Thumbnail';
import Slide from './Slide';

import './Slider.scss';

const Slider = () => {
	let sliderArr = [
		<Slide id='1' src='1.jpeg' text='Natural' />,
		<Slide id='2' src='2.jpeg' text='Artesanal' />,
		<Slide id='3' src='3.jpeg' text='Sostenible' />
	];
	const [ x, setX ] = useState(0);
	const goLeft = () => {
		x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
	};

	return (
		<div className='slider'>
			{sliderArr.map((slide, index) => {
				return (
					<div className='slide ' key={index} style={{ transform: `translateX(${x}%)` }}>
						{slide}
					</div>
				);
			})}
			<button id='goLeft' onClick={goLeft}>
				<LeftArrow />
			</button>
			<button id='goRight' onClick={goRight}>
				<RightArrow />
			</button>
			<Thumbnail image={x} setImage={setX} />
		</div>
	);
};

export default Slider;
