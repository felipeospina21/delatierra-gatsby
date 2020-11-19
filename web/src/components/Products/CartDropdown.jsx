import React, { useContext, useEffect, useState } from 'react';
import { FiX as CloseBtn } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';
import { ProductsContext } from '../../context/ProductsContext';
import { thousandSeparator } from '../../lib/helpers';

import './CartDropdown.scss';

const CartDropdown = ({ toggle }) => {
	const [ cartItems, setCartItems ] = useContext(CartContext);
	const [ products, setProducts ] = useContext(ProductsContext);
	const [ checkoutTotal, setCheckoutTotal ] = useState(0);
	const [ checkoutLink, setCheckoutLink ] = useState('#');

	useEffect(
		() => {
			const total = cartItems.reduce((acc, curr) => {
				return acc + curr.quantity * curr.cost;
			}, 0);

			setCheckoutTotal(total);
		},
		[ cartItems ]
	);

	const clearCartItems = () => {
		const newProducts = [ ...products ];
		newProducts.map(product => {
			product.quantity[0] = 0;
			product.quantity[1] = 0;
		});

		setProducts(newProducts);
		setCartItems([]);
	};

	const handleCheckout = () => {
		let wspText =
			'http://api.whatsapp.com/send?phone=573054269112&text=Hola,%20quisiera%20pedir:%20';
		const orderTextArr = [];
		cartItems.map(item =>
			orderTextArr.push([ item.quantity, item.itemName, item.size ].join(' '))
		);
		setCheckoutLink(wspText.concat(orderTextArr.join(', ')));
	};

	return (
		<div className='cart-dropdown'>
			<div className='close-btn-container'>
				<CloseBtn className='close-btn' onClick={toggle} />
			</div>

			<div className='cart-items-container'>
				<table>
					<tbody>
						<tr>
							<th>Cantidad</th>
							<th>Item</th>
							<th />
							<th>Valor</th>
						</tr>
						{cartItems.map((cartItem, index) => (
							<tr className='cart-item' key={index}>
								<td>{cartItem.quantity}</td>
								<td>{`${cartItem.itemName} ${cartItem.size}`}</td>
								<td>=</td>
								<td>$ {thousandSeparator(cartItem.cost)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className='cart-checkout'>
				$ {thousandSeparator(checkoutTotal)}
				<button
					className='checkout-btn'
					onClick={() => handleCheckout()}
					disabled={!checkoutTotal > 0}>
					{!checkoutTotal > 0 ? 'Pagar' : <a href={checkoutLink}>Pagar</a>}
				</button>
				<button className='clear-cart-btn' onClick={() => clearCartItems()}>
					Borrar
				</button>
			</div>
		</div>
	);
};

export default CartDropdown;
