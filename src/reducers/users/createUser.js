import jwt from "jwt-decode";
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
            const { token } = action.payload
            localStorage.token = token
            const userToken = jwt(token);
            const { userId } = userToken
            localStorage.userId = userId
            return {
                ...state,
                isAuth: true,
                newUser: action.payload,
                error: null
            }
        case userActionTypes.CREATE_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}