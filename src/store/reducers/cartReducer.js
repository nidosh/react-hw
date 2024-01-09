import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantitiy++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantitiy: 1, product: payload }]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
            }
        default:
            return state;
            break;
    }

}