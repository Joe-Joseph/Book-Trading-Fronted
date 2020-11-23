import axios from 'axios'
import { booksActionTypes } from '../actionTypes'

export const getOneBook = (bookId) => async dispatch => {
    try{
        const result = await axios.get(`https://manage-book-trading-club.herokuapp.com/api/books/${bookId}`)
        dispatch({
            type: booksActionTypes.GET_ONE_BOOK_SUCCESS,
            payload: result && result.data
        })
    }catch (err) {
        dispatch({
            type: booksActionTypes.GET_ONE_BOOK_FAIL,
            error: err.response
        })
    }
}