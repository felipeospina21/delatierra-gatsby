import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductsContext } from '../../context/ProductsContext';

import './ProductsCollection.scss';

function ProductsCollection() {
	const [ products ] = useContext(ProductsContext);

	return (
		<div className='products-collection'>
			{products.map(product => {
				const { id, slug, title, image, alias, sizes, cost } = product;

				return (
					<ProductCard
						key={id}
						id={id}
						alias={alias}
						sizes={sizes}
						cost={cost}
						title={title}
						image={image}
						slug={slug}
					/>
				);
			})}
		</div>
	);
}

export default ProductsCollection;
