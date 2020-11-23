import { requestsActionTypes } from '../../actions/actionTypes/'

const initialState = {
    request: {},
    error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    switch(action.type) {
        case requestsActionTypes.CREATE_REQUEST_SUCCESS:
            localStorage.token = action.payload.token
            return {
                ...state,
                request: action.payload,
                error: null
            }
        case requestsActionTypes.CREATE_REQUEST_FAIL:
            return {
                ...state,
                error: action.payload,
                request: action.payload
            }
        default:
            return state
    }
}