import React, { useState, useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import SelectProduct from './SelectProduct';
import Image from '../image';
import ProductInfo from './ProductInfo';

import './Product.scss';

const Product = ({ index }) => {
	const [ showBuyMenu, setShowBuyMenu ] = useState(false);
	const [ products ] = useContext(ProductsContext);
	const {
		id,
		image,
		alias,
		title,
		description,
		properties,
		ingredients,
		sizes,
		cost
	} = products[index];

	function toggleMenu() {
		setShowBuyMenu(!showBuyMenu);
	}

	return (
		<div>
			<div className='select-product-container'>
				{showBuyMenu ? (
					<SelectProduct
						key={id}
						id={id}
						alias={alias}
						size={sizes}
						cost={cost}
						toggleMenu={toggleMenu}
					/>
				) : null}

				<Image className='product-img' src={image} alt={`frasco de  ${title}`} />

				<button onClick={() => toggleMenu()} className='buy-btn'>
					Comprar
				</button>
			</div>

			<ProductInfo
				key={id}
				description={description}
				properties={properties}
				ingredients={ingredients}
				sizes={sizes}
				cost={cost}
			/>
		</div>
	);
};

export default Product;
