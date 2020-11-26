import React from 'react';
import { Link } from 'gatsby';
import Image from '../../components/image';

import './Card.scss';

const Card = ({ id, title, imageUrl, excerpt, size, slug }) => {
	return (
		<div className={`card ${id % 2 > 0 ? 'right-col' : 'left-col'} r${id + 1}`}>
			<div className='card__img__container'>
				<Image src={imageUrl} alt={`imagen de ${title}`} className='card__img' />
			</div>
			<div className='card__text'>
				<h2 className='card__title'>{title}</h2>
				<p className='card__body'>{excerpt}</p>
				<p className='card__body'>{`Presentación: ${size[0]} y ${size[1]}`}.</p>
				<p className='card__body'>
					<Link to={`/${slug}`}>Conoce más</Link>
				</p>
			</div>
		</div>
	);
};

export default Card;
