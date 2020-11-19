import React, { useState, useContext, useEffect } from 'react';
import { FiShoppingCart as ShoppingIcon } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';

import './CartIcon.styles.scss';

const CartIcon = ({ toggleCartDropdown }) => {
	const [ cartItems ] = useContext(CartContext);
	const cartCount = cartItems.length;

	return (
		<div className='cart-container'>
			<ShoppingIcon className='shopping-icon' onClick={toggleCartDropdown} />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};

export default CartIcon;
