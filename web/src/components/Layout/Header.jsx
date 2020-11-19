import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Logo from '../../assets/logoDLT.svg';
import { FaBars as MenuIcon } from 'react-icons/fa';
import { FaTimes as CloseIcon } from 'react-icons/fa';
// import { FaRegUser as UserIcon } from 'react-icons/fa';
import CartIcon from './CartIcon';
import NavLinks from './NavLinks';
import CartDropdown from '../Products/CartDropdown';

import './Header.styles.scss';

const Header = () => {
	const [ showMenu, setShowMenu ] = useState(false);
	const [ showCartMenu, setShowCartMenu ] = useState(false);
	const breakpoints = useBreakpoint();
	// let windowWidth = window.innerWidth
	// const [ screenWidth, setScreenWidth ] = useState(document.body.clientWidth);

	// window.addEventListener('resize', () => {
	// 	setScreenWidth(document.body.clientWidth);
	// });

	// useEffect(
	// 	() => {
	// 		screenWidth >= 1000 ? setShowMenu(true) : setShowMenu(false);
	// 	},
	// 	[ screenWidth ]
	// );

	function toggleClass() {
		setShowMenu(currentState => !currentState);
	}

	function toggleCartDropdown() {
		setShowCartMenu(currentState => !currentState);
	}

	return (
		<>
			<div className='header '>
				<Link to='/'>
					<Logo className='logo' />
				</Link>
				{showMenu ? (
					<CloseIcon className='toggle-menu' onClick={toggleClass} />
				) : (
					<MenuIcon className='toggle-menu' onClick={toggleClass} />
				)}
				{showMenu && breakpoints.md ? <NavLinks /> : null}
				{breakpoints.md ? null : <NavLinks/>}
				{/* <Link to='/registro' className='user-icon'>
					<UserIcon />
				</Link> */}
				<CartIcon toggleCartDropdown={toggleCartDropdown} />
			</div>
			{showCartMenu ? <CartDropdown toggle={toggleCartDropdown} /> : null}
		</>
	);
};

export default Header;
