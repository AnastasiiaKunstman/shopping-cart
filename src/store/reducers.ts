import { ActionTypes } from "./actions";
import { CartItem } from "./types";

// Исходное состояние корзины
const initialState: CartItem[] = [];

// Редюсер для управления корзиной
const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case ActionTypes.REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case ActionTypes.UPDATE_QUANTITY:
      return state.map(item =>
        item.id === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    default:
      return state;
  }
};

export default cartReducer;