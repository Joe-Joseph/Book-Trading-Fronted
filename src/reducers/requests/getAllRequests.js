import { requestsActionTypes } from '../../actions/actionTypes/'

const initialState = {
    requests: [],
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action){
    switch(action.type) {
        case requestsActionTypes.GET_ALL_REQUESTES_SUCCESS:
            return {
                ...state,
                requests: action.payload.data
            }
        case requestsActionTypes.GET_ALL_REQUESTES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}