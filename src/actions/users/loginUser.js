import { userActionTypes } from '../actionTypes'
import axios from 'axios'

export const loginUser = (user) => async dispatch => {
    try {
        const result = await axios.post('https://manage-book-trading-club.herokuapp.com/api/users/login', user)
            dispatch({
                type: userActionTypes.LOGIN_USER,
                payload: result.data
            })
    }catch(error) {
            dispatch({
                type: userActionTypes.LOGIN_USER_FAIL,
                payload: error.response.data
            })
        }
    }