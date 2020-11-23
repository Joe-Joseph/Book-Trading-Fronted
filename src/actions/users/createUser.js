import { userActionTypes } from '../actionTypes'
import axios from 'axios'

export const createUser = (user) => async dispatch => {
    try{
        const result = await axios.post('https://manage-book-trading-club.herokuapp.com/api/users/signup', user)
        dispatch({
            type: userActionTypes.CREATE_USER,
            payload: result.data
        })
    }catch(error) {
        dispatch({
            type: userActionTypes.CREATE_USER_FAIL,
            payload: error.response.data
        })
    }
}