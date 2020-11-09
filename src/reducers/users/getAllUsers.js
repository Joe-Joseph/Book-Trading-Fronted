import { userActionTypes } from '../../actions/actionTypes/'

const initialState = {
    users: [],
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    switch(action.type) {
        case userActionTypes.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case userActionTypes.GET_ALL_USERS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}