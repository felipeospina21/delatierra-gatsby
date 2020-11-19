import React from 'react';
import './Contact.scss';

export default function Contact() {
	return (
		<div className='wrapper'>
			<div className='contacto'>
				<div className='contacto-container'>
					<h2 className='contacto-container-title'> Contacto</h2>
					<p>Whatsapp: 305 4269 112</p>
				</div>
				<div className='contacto-container'>
					<h2 className='contacto-container-title'>Horarios De Atención</h2>
					<table className='contact-table'>
						<tbody>
							<tr>
								<td>Lunes a Viernes</td>
								<td>8:00 am</td>
								<td>-</td>
								<td>6:00 pm</td>
							</tr>
							<tr>
								<td>Sábados</td>
								<td>8:00 am</td>
								<td>-</td>
								<td>2:00 pm</td>
							</tr>
							<tr>
								<td>Domingos y Festivos</td>
								<td>8:00 am</td>
								<td>-</td>

								<td>11:00 am</td>
							</tr>
						</tbody>
					</table>

					{/* <p>L-V: 8:00 am - 6:00 pm</p>
					<p>S : 8:00 am - 2:00 pm</p>
					<p>D : 8:00 am - 11:00 am</p> */}
				</div>
			</div>
		</div>
	);
}
