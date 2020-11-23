import { booksActionTypes } from '../../actions/actionTypes'

const initialState = {
    book: [],
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case booksActionTypes.GET_ONE_BOOK_SUCCESS:
            return {
                ...state,
                book: action.payload.data
            }
        case booksActionTypes.GET_ONE_BOOK_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

