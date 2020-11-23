import { combineReducers } from 'redux'
import createUserReducer from './users/createUser'
import getAllBooks from './books/getAllBooks'
import getAllUsers from './users/getAllUsers'
import getAllRequests from './requests/getAllRequests'
import getOneBook from './books/getOneBook' 
import loginUser from './users/loginUser'
import createRequest from './requests/createRequest'
import addBook from './books/addBook'
import getUserProfile from './users/getUserProfile'
import editUserProfile from './users/editUserProfile'

export default combineReducers({
    users: createUserReducer,
    allBooks: getAllBooks,
    allUsers: getAllUsers,
    allRequests: getAllRequests,
    oneBook: getOneBook,
    loggedInUser: loginUser,
    newRequest: createRequest,
    newBook: addBook,
    profile: getUserProfile,
    editProfile: editUserProfile
});
