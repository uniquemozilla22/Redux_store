import ModalTypes from "../types/ModalTypes"

let initialState = {
    sidebar:false
}

const ModalReducer =(state =initialState, action)=>{
    switch(action.type){
        case ModalTypes.SIDEBAR:
            return {...state , sidebar: !state.sidebar}
            default:
                return state
    }
}


export default ModalReducer