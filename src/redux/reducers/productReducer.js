import { Actiontypes } from "../constants/action-types"


const initialState = {
    products:[{
        id:1,
        title:"Dipesh",
        category:"Programmer"
    }]
}


export const productReducer = (state=initialState,{type, payload})=>{

    switch(type){


        case Actiontypes.SET_PRODUCTS:{
            return state
        }

        case Actiontypes.SELECTED_PRODUCT:{
            return state
        }

        case Actiontypes.REMOVE_SELECTED_PRODUCT:{
            return state
        }

        default:{
            return state
        }
    }

}