import { booksActionTypes } from '../../actions/actionTypes'

const initialState = {
    books: [],
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case booksActionTypes.GET_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload
            }
        case booksActionTypes.GET_ALL_BOOKS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

