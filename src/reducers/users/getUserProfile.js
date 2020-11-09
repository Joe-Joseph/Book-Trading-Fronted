import { userActionTypes } from '../../actions/actionTypes'

const initialState = {
    userProfile: {},
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    switch(action.type) {
        case userActionTypes.GET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload
            }
        case userActionTypes.GET_USER_PROFILE_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}