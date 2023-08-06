import React, { useReducer, } from 'react'
import OpSwitchContext from './opSwitchContext'
import { SET_ACTIVE_STATE, 
    HANDLE_CLICK, 
    GET_ACTIVE_STATE,
    SET_ERROR } from './types'


export const OpSwitchState = () => {
    const initialState = {
        items: [ ],
        active: 0,
        buttonSize: 0,
        error: [ ],
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    
    const setInitialState = buttonArray => {
        if (buttonArray.length )
    }


    return (
        <OpSwitchContext.Provider


        >   {props.children}
        </OpSwitchContext.Provider>
    )
}


// export default (state, action) => {
//     switch (action.type) {
//         case USER_LOADED:
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 loading: false,
//                 user: action.payload
//             }
//     }
// }
