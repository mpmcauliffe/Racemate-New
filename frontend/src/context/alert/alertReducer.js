import { SET_ALERT, REMOVE_ALERT, } from '../types'


export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return { 
                ...state,
                isVisible: true,
                msg: action.payload.msg,
                type: action.payload.type,                
            }

        case REMOVE_ALERT:
            return { 
                ...state,
                ...action.payload,
                isVisible: false,                 
            }
        
        default:
            return state
    }
}
