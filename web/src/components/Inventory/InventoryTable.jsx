import React from 'react';
import InventoryRow from './InventoryRow';
import firebase from 'gatsby-plugin-firebase';
import './InventoryProduct.scss';

const InventoryTable = ({ products, setProducts }) => {
	const addToInventory = async products => {
		products.map(product => {
			firebase
				.firestore()
				.collection('productos')
				.doc(product.id)
				.update({ quantity: product.quantity });
		});
		console.log('BD Modificada');
	};

	return (
		<div className='table-inventory-container'>
			<table className='table-inventory-table'>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Inventario</th>
						<th>Agregar Cantidad</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						return (
							<InventoryRow
								key={product.id}
								product={product}
								products={products}
								setProducts={setProducts}
							/>
						);
					})}
				</tbody>
			</table>
			<button className='update-inventory-btn' onClick={() => addToInventory(products)}>
				Actualizar
			</button>
		</div>
	);
};

export default InventoryTable;
