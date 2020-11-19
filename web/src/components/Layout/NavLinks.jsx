import React from 'react';
import { Link } from 'gatsby';
import './NavLinks.styles.scss';

function NavLinks() {
	return (
		<ul className='nav-links'>
			<li>
				<Link to='/'>Inicio</Link>
			</li>
			<li>
				<Link to='/conocenos'>Conócenos</Link>
			</li>
			<li>
				<Link to='/productos'>Productos</Link>
			</li>
			<li>
				<Link to='/contacto'>Contacto</Link>
			</li>
			<li>
				<Link to='/blog'>Blog</Link>
			</li>
		</ul>
	);
}

export default NavLinks;
