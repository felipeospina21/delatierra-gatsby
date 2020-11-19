import React from 'react';
import SEO from '../components/seo';
import ProductsCollection from '../components/Products/ProductsCollection';
import WhatsappBtn from '../components/Layout/WhatsappBtn';

const ProductosPage = () => (
	<div>
		<SEO title='Productos' />
		<WhatsappBtn />
		<div className='products-collection-title'>
			<h3>nuestros productos</h3>
		</div>
		<ProductsCollection />
	</div>
);

export default ProductosPage;
