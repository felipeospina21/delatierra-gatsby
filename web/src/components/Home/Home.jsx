import React from 'react';
import CardsCollection from './CardsCollection';
import Slider from './Slider';
import WhatsappBtn from '../Layout/WhatsappBtn';

import './Home.scss';

const Home = () => {
	return (
		<div>
			<Slider />
			<WhatsappBtn />
			<div className='home-history'>
				Nuestro objetivo es generar conciencia sobre la importancia del consumo de
				alimentos puros, naturales y sin aditivos; brindándote opciones de productos
				nutritivos y deliciosos. Nuestros productos están pensados para ser incluidos en
				tu alimentación diaria como complemento o snack en cualquier momento del día
			</div>
			<h2 className='home-products-title'>nuestros productos</h2>
			<CardsCollection />
		</div>
	);
};

export default Home;
