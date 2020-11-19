import React, { useState, useEffect } from 'react';
import ProductsTable from './ProductsTable';
import InventoryTable from './InventoryTable';
import firebase from 'gatsby-plugin-firebase';

import './InventoryProduct.scss';

const InventoryContainer = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		getInventory();
	}, []);

	const getInventory = async () => {
		firebase.firestore().collection('productos').onSnapshot(querySnapshot => {
			const docs = [];
			querySnapshot.forEach(doc => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProducts(docs);
		});
	};
	return (
		<>
			<h2 className='inventory-title'>Inventario</h2>
			<div className='inventory-container'>
				<ProductsTable products={products} setProducts={setProducts} />
				<InventoryTable products={products} setProducts={setProducts} />
			</div>
		</>
	);
};

export default InventoryContainer;
