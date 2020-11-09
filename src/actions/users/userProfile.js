import { userActionTypes } from '../actionTypes'
import axios from 'axios'

export const getUserProfile = () => async dispatch => {
        try {
            const result = await axios.get('https://manage-book-trading-club.herokuapp.com/api/users/profile', {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            dispatch({
                type: userActionTypes.GET_USER_PROFILE,
                payload: result.data
            })
        }catch(error) {
            dispatch({
                type: userActionTypes.GET_USER_PROFILE_FAIL,
                payload: error.response.data
            })
        }
    }

export const editUserProfile = (userData) => async dispatch => {
        try {
            const result = await axios.put('https://manage-book-trading-club.herokuapp.com/api/users/profile', userData, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
            dispatch({
                type: userActionTypes.EDIT_USER_PROFILE,
                payload: result.data
            })
        }catch(error) {
            dispatch({
                type: userActionTypes.EDIT_USER_PROFILE_FAIL,
                payload: error.response.data
            })
        }
    }