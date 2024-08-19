import { Children, createContext,useState,useReducer } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
    items:[],
    addItemsToCart: ()=>{},
    updateItemsQuantity:()=>{}
});

function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        const id = action.payload; 
        const updatedItems = [...state.items];
    
        const existingCartItemIndex = updatedItems.findIndex(
          (cartItem) => cartItem.id === id
        );
        const existingCartItem = updatedItems[existingCartItemIndex];
  
        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          };
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          const product = DUMMY_PRODUCTS.find((product) => product.id === id);
          console.log(product)
          updatedItems.push({
            id: id,
            name: product.title,
            price: product.price,
            quantity: 1,
          });
        }
  
        return {
          items: updatedItems,
        };
    }
    
    if(action.type === 'UPDATE_ITEM'){
        const updatedItems = [...state.items];
          const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += action.payload.amount;
    
          if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
          } else {
            updatedItems[updatedItemIndex] = updatedItem;
          }
    
          return {
            items: updatedItems,
          };
    }

    return state;
}
export default function CartContectProvider({children}){

    const [shoppingCartstate, shoppingCartDispatch] = useReducer(cartReducer, {
        items: [],
    })
   
    
      function handleAddItemToCart(id) {
        shoppingCartDispatch({type: 'ADD_ITEM', payload: id})
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({type: 'UPDATE_ITEM', payload: {
            productId,
            amount
        }})
       
      }
    
      const ctxValue = {
        items: shoppingCartstate.items,
        addItemsToCart: handleAddItemToCart,
        updateItemsQuantity: handleUpdateCartItemQuantity,
      }

      
      return <CartContext.Provider value = {ctxValue}>{children} </CartContext.Provider>

     
}