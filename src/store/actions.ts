import { CartItem } from "./types";

// Типы экшенов
export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_QUANTITY = "UPDATE_QUANTITY",
}

// Экшен для добавления товара в корзину
export const addToCart = (item: CartItem) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: item,
});

// Экшен для удаления товара из корзины
export const removeFromCart = (itemId: number) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: itemId,
});

// Экшен для обновления количества товара в корзине
export const updateQuantity = (itemId: number, quantity: number) => ({
  type: ActionTypes.UPDATE_QUANTITY,
  payload: { itemId, quantity },
});