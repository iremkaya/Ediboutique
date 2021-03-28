import * as actionTypes from "./actionTypes"

export function addToCart(cartItem){
    return {type:actionTypes.ADD_TO_CART,payload:cartItem}
}

export function removeFromCart(product){
    return {type:actionTypes.REMOVE_FROM_CART,payload:product}
}

export function addFromCart(product){
    debugger;
    return {type:actionTypes.ADD_FROM_CART,payload:product}
}