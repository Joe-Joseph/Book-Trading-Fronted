import jwt from "jwt-decode";
import { userActionTypes } from '../../actions/actionTypes/'

const initialState = {
    user: {},
    error: null,
    isAuth: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    switch(action.type) {
        case userActionTypes.LOGIN_USER:
            const { token } = action.payload
            localStorage.token = token
            const userToken = jwt(token);
            const { userId } = userToken
            localStorage.userId = userId
            return {
                ...state,
                isAuth: true,
                user: action.payload,
                error: null
            }
        case userActionTypes.LOGIN_USER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}