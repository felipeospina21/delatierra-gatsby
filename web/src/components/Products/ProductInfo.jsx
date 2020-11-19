import React from 'react';

import './ProductInfo.scss';

const ProductInfo = ({ description, properties, ingredients, sizes, cost }) => {
	return (
		<div>
			<div className='product-info-container'>
				<h3 className='product-info-title'>Descripción</h3>
				<p className='product-info-text'>{description}</p>
			</div>

			<div className='product-info-container'>
				<h3 className='product-info-title'>Propiedades</h3>
				<ul className='product-info-list'>
					{properties.map((prop, index) => <li key={index}>{prop}</li>)}
				</ul>
			</div>

			<div className='product-info-container'>
				<h3 className='product-info-title'>Ingredientes</h3>
				<ul className='product-info-list'>
					{ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
				</ul>
			</div>

			<div className='product-info-container'>
				<h3 className='product-info-title'>Presentaciones</h3>
				<ul className='product-info-list'>
					{sizes.map((size, index) => <li key={index}>{size}</li>)}
				</ul>
			</div>
		</div>
	);
};

export default ProductInfo;
