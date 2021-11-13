import { Actiontypes } from "../constants/action-types"

export const setProducts = (products) =>{
    return {
        type:Actiontypes.SET_PRODUCT,
        payload:products
    }
}


export const setSelectedProduct= (products) =>{
    return {
        type:Actiontypes.SELECTED_PRODUCT,
        payload:products

    }
}

export const removeSelectedProduct = (products) =>{
    return {
        type:Actiontypes.REMOVE_SELECTED_PRODUCT,
        payload:products
    }
}