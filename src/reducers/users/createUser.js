import { userActionTypes } from '../../actions/actionTypes/'

const initialState = {
    newUser: {},
    error: null,
    isAuth: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    switch(action.type) {
        case userActionTypes.CREATE_USER:
            localStorage.token = action.payload.token
            console.log('REDUCER SUCCESS!!>>>>>>>', action.payload)
            return {
                ...state,
                isAuth: true,
                newUser: action.payload
            }
        case userActionTypes.CREATE_USER_FAIL:
            console.log('REDUCER FAIL!!>>>>>>>', action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}