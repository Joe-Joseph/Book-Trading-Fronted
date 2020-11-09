import { requestsActionTypes } from '../actionTypes'
import axios from 'axios'

export const createRequest = (request) => async dispatch => {
    try{
        const result = await axios.post('https://manage-book-trading-club.herokuapp.com/api/requests', request, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        dispatch({
            type: requestsActionTypes.CREATE_REQUEST_SUCCESS,
            payload: result.data
        })
    }catch(error) {
        dispatch({
            type: requestsActionTypes.CREATE_REQUEST_FAIL,
            payload: error.response.data
        })
    }
}
