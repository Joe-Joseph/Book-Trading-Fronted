import { userActionTypes } from '../actionTypes'
import axios from 'axios'

export const getAllUsers = () => async dispatch => {
        try {
            const result = await axios.get('https://manage-book-trading-club.herokuapp.com/api/users')
            dispatch({
                type: userActionTypes.GET_ALL_USERS_SUCCESS,
                payload: result.data
            })
        }catch(error) {
            dispatch({
                type: userActionTypes.GET_ALL_USERS_FAIL,
                payload: error.response.data
            })
        }
    }