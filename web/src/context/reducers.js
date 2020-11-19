export const ACTIONS = {
	ADD_PRODUCT         : 'ADD_PRODUCT',
	REMOVE_PRODUCT      : 'REMOVE_PRODUCT',
	TOGGLE_PRODUCT_MENU : 'TOGGLE_PRODUCT_MENU'
};

const addProductToCart = () => {};
const removeProductFromCart = () => {};
const toggleProductMenu = (productId, state) => {
	const products = [ ...state.products ];
	const selectedProduct = products.filter(product => product.id === productId);
	return selectedProduct;
	// return {state, showBuyMenu : true}
};

export const shopReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_PRODUCT:
			return addProductToCart;
		case ACTIONS.REMOVE_PRODUCT:
			return;
		case ACTIONS.TOGGLE_PRODUCT_MENU:
			return toggleProductMenu(action.productId, state);
		default:
			return state;
	}
};
