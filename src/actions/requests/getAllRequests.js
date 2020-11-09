import { requestsActionTypes } from '../actionTypes'
import axios from 'axios'

export const getAllRequests = () => async dispatch => {
        try {
            const result = await axios.get('https://manage-book-trading-club.herokuapp.com/api/requests')
            dispatch({
                type: requestsActionTypes.GET_ALL_REQUESTES_SUCCESS,
                payload: result.data
            })
        }catch(error) {
            dispatch({
                type: requestsActionTypes.GET_ALL_REQUESTES_FAIL,
                payload: error.response
            })
        }
    }