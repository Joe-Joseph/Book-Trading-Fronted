import { booksActionTypes } from '../../actions/actionTypes'

const initialState = {
    book: [],
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case booksActionTypes.CREATE_BOOK_SUCCESS:
            return {
                ...state,
                book: action.payload,
                error: null
            }
        case booksActionTypes.CREATE_BOOK_FAIL:
            return {
                ...state,
                error: action.payload,
                book: []
            }
        default:
            return state
    }
}

