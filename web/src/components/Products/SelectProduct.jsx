import React, { useState, useContext } from 'react';
import AddRemoveBtn from './AddRemoveBtn';
import { CartContext } from '../../context/CartContext';
import { FiX as CloseBtn } from 'react-icons/fi';
import { thousandSeparator } from '../../lib/helpers';

import './SelectProduct.scss';

const SelectProduct = ({ id, alias, size, cost, toggleMenu }) => {
	const [ countBigSize, setCountBigSize ] = useState(0);
	const [ countSmallSize, setCountSmallSize ] = useState(0);

	const [ cartItems, setCartItems ] = useContext(CartContext);

	function addItem(id) {
		if (id === 0) {
			setCountBigSize(prevCount => prevCount + 1);
		} else if (id === 1) {
			setCountSmallSize(prevCount => prevCount + 1);
		}
	}

	function removeItem(id) {
		if (id === 0 && countBigSize !== 0) {
			setCountBigSize(prevCount => prevCount - 1);
		} else if (id === 1 && countSmallSize !== 0) {
			setCountSmallSize(prevCount => prevCount - 1);
		}
	}

	function addItemsToCart(alias, size) {
		const newCartItems = [ ...cartItems ];
		if (countBigSize > 0)
			newCartItems.push({
				id       : `${id}_L`,
				quantity : countBigSize,
				itemName : alias,
				size     : size[0],
				cost     : cost[0]
			});
		if (countSmallSize > 0)
			newCartItems.push({
				id       : `${id}_S`,
				quantity : countSmallSize,
				itemName : alias,
				size     : size[1],
				cost     : cost[1]
			});
		setCartItems(newCartItems);
		setCountBigSize(0);
		setCountSmallSize(0);
	}

	return (
		<div className='select-product'>
			<div className='close-btn-container'>
				<CloseBtn className='close-btn' onClick={toggleMenu} />
			</div>

			<div className='product-size-container'>
				<div className='product-quantity'>
					<span className='product-size'>{size[0]}</span>
					<AddRemoveBtn
						className='add-remove-btn'
						quantity={countBigSize}
						idSize={0}
						addItem={addItem}
						removeItem={removeItem}
					/>
					<div className='product-cost'>${thousandSeparator(cost[0])}</div>
				</div>

				<div className='product-quantity'>
					<span className='product-size'>{size[1]}</span>
					<AddRemoveBtn
						className='add-remove-btn'
						quantity={countSmallSize}
						idSize={1}
						addItem={addItem}
						removeItem={removeItem}
					/>
					<div className='product-cost'>${thousandSeparator(cost[1])}</div>
				</div>

				<button className='add-to-cart-btn' onClick={() => addItemsToCart(alias, size)}>
					Agregar
				</button>
			</div>
		</div>
	);
};

export default SelectProduct;
