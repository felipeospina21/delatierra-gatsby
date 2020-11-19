import React, { useState } from 'react';
import ProductRow from './ProductRow';
import Total from './Total';
import firebase from 'gatsby-plugin-firebase';

import './InventoryProduct.scss';

const ProductsTable = ({ products, setProducts }) => {
	const addProductsToCart = async products => {
		products.map(product => {
			firebase
				.firestore()
				.collection('productos')
				.doc(product.id)
				.update({ quantity: product.quantity });
		});
		console.log('BD Modificada');
		// console.log(products)
	};

	return (
		<div className='table-inventory-container'>
			<table className='table-inventory-table'>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Invent</th>
						<th>Cantidad</th>
						<th>Sub Total</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						return (
							<ProductRow
								key={product.name}
								product={product}
								products={products}
								setProducts={setProducts}
							/>
						);
					})}
				</tbody>
			</table>
			<Total products={products} />

			<button className='sale-btn' onClick={() => addProductsToCart(products)}>
				Vender
			</button>
		</div>
	);
};

export default ProductsTable;
