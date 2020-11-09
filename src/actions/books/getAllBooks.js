import axios from 'axios'
import { booksActionTypes } from '../actionTypes'

export const getAllBooks = () => async dispatch => {
    try{
        const result = await axios.get('https://manage-book-trading-club.herokuapp.com/api/books')
        dispatch({
            type: booksActionTypes.GET_ALL_BOOKS_SUCCESS,
            payload: result.data
        })
    }catch (err) {
        dispatch({
            type: booksActionTypes.GET_ALL_BOOKS_FAIL,
            error: err.response.data
        })
    }
}