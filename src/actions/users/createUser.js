import { userActionTypes } from '../actionTypes'
import axios from 'axios'

export const createUser = (user) => async dispatch => {
    axios.post('https://manage-book-trading-club.herokuapp.com/api/user/signup', user)
        .then((result) => {
            console.log('Response!!!!!', result)
            dispatch({
                type: userActionTypes.CREATE_USER,
                payload: result.data
            })
        }).catch(error => {
            dispatch({
                type: userActionTypes.CREATE_USER_FAIL,
                payload: error.response.data
            })
        })
    }