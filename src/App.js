import React, { Component } from 'react'
import { Grid, Segment, Pagination } from 'semantic-ui-react'
import { connect } from 'react-redux';

import Books from './components/books/Books'
import Requests from './components/requests/Request'
import Sidebar from './components/Sidebar'
import CreateRequest from './components/requests/CreateRequest'
import Users from './components/users/Users'
import Signup from './components/users/Signup'
import Login from './components/users/Login'
import { createUser } from './actions/users/createUser'

import './styles/homePage.css'

class App extends Component {
  state = {
    activeItem: 'Books Trading',
    attributes: {}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleChange = (e) => {
    const { name, value } = e.target
    const { attributes } = this.state
    this.setState({
      attributes: {
        ...attributes,
        [name]: value
      },
    })
  }

  submitUser = async() => {
    const { createUser } = this.props
    const { attributes } = this.state
    await createUser(attributes)

    this.handleRedirect()
  }

  handleRedirect = async() => {
    const { userCreated } = this.props
    userCreated && userCreated.data &&
    this.setState({
      activeItem: 'Books Trading'
    })
  }

  render () {
    const { activeItem, attributes } = this.state
    const { userFailed } = this.props
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
                <div className='pagination'>
                  <Pagination
                    defaultActivePage={1}
                    firstItem={null}
                    lastItem={null}
                    pointing
                    secondary
                    totalPages={3}
                  />
                </div>
                
              </>
              : (activeItem === 'All Request')?
              <Requests cardClass='request-book-card'/>

              : (activeItem === 'Create request')?
              <CreateRequest/>

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
              <Login/>: null
            }
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  userCreated: state.users.newUser,
  userFailed: state.users.error
})

export default connect(mapStateToProps, { createUser })(App)
