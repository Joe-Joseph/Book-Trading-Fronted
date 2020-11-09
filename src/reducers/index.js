import { combineReducers } from 'redux'
import createUserReducer from './users/createUser'
import getAllBooks from './books/getAllBooks'

export default combineReducers({
    users: createUserReducer,
    allBooks: getAllBooks
});
