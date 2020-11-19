import React from 'react';
import ArtesanalLogo from '../../assets/artesanal.svg';
import LocalLogo from '../../assets/local.svg';
import NaturalLogo from '../../assets/natural.svg';
import SostenibleLogo from '../../assets/sostenible.svg';
import Image from '../image';

import './OurValues.scss';

export default function OurValues() {
	return (
		<div className='comp-values '>
			<div className='comp-value section1'>
				<p>
					<b>
						Nuestra esencia está fundamentada en cuatro pilares que nos definen como
						marca.
					</b>
				</p>
			</div>

			<div className='comp-value section2'>
				<div className='comp-value-title'>
					<ArtesanalLogo className='value-logo' />
					<h3>artesanal</h3>
				</div>
				<p>
					Preferimos calidad sobre cantidad. Nuestros procesos productivos son hechos de
					manera artesanal y en lotes pequeños. Así garantizamos que cada producto que
					llegue a tus manos cumpla con la calidad que te mereces.
				</p>
			</div>

			<div className='comp-value section3'>
				<div className='comp-value-title'>
					<LocalLogo id='local-logo' className='value-logo' />
					<h3>local</h3>
				</div>
				<p>
					Nos importa lo nuestro. El 80% de nuestras materias primas e insumos son
					colombianos. Estamos convencidos que uniendo fuerzas y apoyando los negocios
					locales, impactamos de manera positiva la economía de nuestro país.
				</p>
			</div>

			<div className='comp-value section4'>
				<div className='comp-value-title'>
					<SostenibleLogo className='value-logo' />
					<h3>sostenible</h3>
				</div>
				<p>
					Queremos ser sostenibles y amigables con el medio ambiente. Nuestros empaques
					son reciclables y/o reutilizables, y procuramos reducir el gasto de agua y
					energía en nuestros procesos productivos.
				</p>
			</div>

			<div className='comp-value section5'>
				<div className='comp-value-title'>
					<NaturalLogo id='natural-logo' className='value-logo' />
					<h3>natural</h3>
				</div>
				<p>
					Creemos que la mejor medicina que le podemos dar a nuestro cuerpo se encuentra
					en los alimentos que salen de la tierra. Alimentos puros, reales y sin aditivos.
				</p>
			</div>

			<div className='history-img-container'>
				<Image
					id='history-img-1'
					className='history-img'
					src='history-img.jpg'
					alt='Fotos de arbol de almendras'
				/>
				<Image
					id='history-img-2'
					className='history-img'
					src='cows2.jpg'
					alt='Fotos de arbol de almendras'
				/>
			</div>
		</div>
	);
}
