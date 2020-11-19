import React from 'react';

import './Thumbnail.scss';

const Thumbnail = ({ image, setImage }) => {
	return (
		<div className='thumbnail'>
			<span
				id='dot1'
				className={image === 0 ? 'dot active' : 'dot'}
				onClick={() => setImage(0)}
			/>
			<span
				id='dot2'
				className={image === -100 ? 'dot active' : 'dot'}
				onClick={() => setImage(-100)}
			/>
			<span
				id='dot3'
				className={image === -200 ? 'dot active' : 'dot'}
				onClick={() => setImage(-200)}
			/>
		</div>
	);
};

export default Thumbnail;
