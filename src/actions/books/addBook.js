import { booksActionTypes } from '../actionTypes'
import axios from 'axios'

export const addBook = (book) => async dispatch => {
    try{
        const result = await axios.post('https://manage-book-trading-club.herokuapp.com/api/books', book, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        dispatch({
            type: booksActionTypes.CREATE_BOOK_SUCCESS,
            payload: result.data
        })
    }catch(error) {
        dispatch({
            type: booksActionTypes.CREATE_BOOK_FAIL,
            payload: error.response.data
        })
    }
}
