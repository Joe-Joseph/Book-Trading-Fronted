import React, { Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import axios from 'axios'

import Books from './components/books/Books'
import AddBook from './components/books/addBook'
import Requests from './components/requests/Request'
import Sidebar from './components/Sidebar'
import CreateRequest from './components/requests/CreateRequest'
import Users from './components/users/Users'
import Signup from './components/users/Signup'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import UserCard from './components/users/UserCard'

import { createUser } from './actions/users/createUser'
import { loginUser } from './actions/users/loginUser'
import { getUserProfile } from './actions/users/userProfile'
import { addBook } from './actions/books/addBook'

import './styles/homePage.css'

class App extends Component {
  state = {
    activeItem: 'Books Trading',
    attributes: {
      image: ''
    },
    imageUrl: ''
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount = () => {
    const { getUserProfile } = this.props
    const getProfile = async() => {
      await getUserProfile()
    }

    getProfile()
  }

  handleChange = (e) => {
    const { name, value, files } = e.target
    const { attributes } = this.state
    this.setState({
      attributes: {
        ...attributes,
        [name]: files ? e.target.files[0]: value
      },
    })
  }

  submitBook = async() => {
    const { attributes } = this.state
    const { addBook } = this.props
    const formData = new FormData();
    formData.append('file', attributes.image);
    formData.append('upload_preset', 'q0zun3cb');
    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dxrjifmhs/image/upload', formData);
      const image = res.data.secure_url;
      attributes.image = image

      this.setState({
        attributes: {
          ...attributes,
          image
        }
      })
      await addBook(attributes)
      if(this.props.book && this.props.book.status && this.props.book.status === 201){
        this.setState({
          ...this.state,
          attributes: {}
        })
        this.handleRedirect('Books Trading')
      }
    } catch (err) {
      console.error(err);
    }
  }

  submitUser = async() => {
    const { createUser } = this.props
    const { attributes } = this.state
    await createUser(attributes)

    const { userCreated } = this.props
    if(userCreated && userCreated.status === 201) {
      this.handleRedirect()
    }
  }

  handleLoginSubmit = async() => {
    const { loginUser } = this.props
    const { attributes } = this.state
    await loginUser(attributes)

    const { loggedInUser } = this.props
    if(loginUser && loggedInUser.status === 200) {
      this.handleRedirect('Books Trading')
    }
  }

  handleRedirect = (menu) => {
    this.setState({
      activeItem: menu
    })
  }

  render () {
    const { activeItem, attributes } = this.state
    const { userFailed, loginError, userProfile } = this.props
    return (
      <Grid className="app-container">
        <Grid.Column width={3} className='sidebar height'>
          <Sidebar
            activeItem={activeItem}
            handleItemClick={this.handleItemClick}
          />
        </Grid.Column>

        <Grid.Column stretched width={12} className='page-content'>
          <Segment className='app-content-container'>
            { (activeItem === 'Books Trading')?
              <>
                <Books cardClass='book-card'/>
              </>
              : (activeItem === 'Add New Book')?
               <AddBook
                handleChange={this.handleChange}
                attributes={attributes}
                submitBook={this.submitBook}
               />
              : (activeItem === 'All Requests')?
              <Requests cardClass='request-book-card'/>

              : (activeItem === 'Create request')?
              <CreateRequest handleRedirect={this.handleRedirect}/>

              : (activeItem === 'Users')?
              <Users/>

              : (activeItem === 'Signup')?
              <Signup
                handleChange={this.handleChange}
                attributes={attributes}
                submitUser={this.submitUser}
                error={userFailed}
              />

              : (activeItem === 'Login')?
              <Login
                handleLoginSubmit={this.handleLoginSubmit}
                handleChange={this.handleChange}
                attributes={attributes}
                error={loginError}
              />

              : (activeItem === 'Profile')?
              <UserCard
                user = {userProfile && userProfile.data}
                handleRedirect={this.handleRedirect}
              />: (activeItem === 'Logout')?
              <Logout />: null
            }
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  userCreated: state.users.newUser,
  loggedInUser: state.loggedInUser.user,
  loginError: state.loggedInUser.error,
  userFailed: state.users.error,
  isAuth: state.users.isAuth,
  book: state.newBook.book,
  userProfile: state.profile.userProfile
})

export default connect(mapStateToProps, { createUser, loginUser, addBook, getUserProfile })(App)
