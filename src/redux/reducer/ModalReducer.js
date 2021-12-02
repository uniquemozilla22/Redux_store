import ModalTypes from "../types/ModalTypes"

let initialState = {
    sidebar:false,
    cart:false
}

const ModalReducer =(state =initialState, action)=>{
    switch(action.type){
        case ModalTypes.SIDEBAR:
            return {...state , sidebar: !state.sidebar}
            case ModalTypes.CART:
                return{...state , cart:!state.cart}
            default:
                return state
    }
}


export default ModalReducer