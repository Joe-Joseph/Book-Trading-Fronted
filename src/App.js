import React, { Component } from 'react'
import { Grid, Segment, Pagination } from 'semantic-ui-react'

import Books from './components/Books'
import Request from './components/Requests'
import Sidebar from './components/Sidebar'
import CreateRequest from './components/CreateRequest'
import Users from './components/Users'
import Signup from './components/Signup'
import Login from './components/Login'
import './styles/homePage.css'

import book1 from './images/book1.png'
import book2 from './images/book2.png'
import book3 from './images/book3.png'
import book4 from './images/book4.png'
import book5 from './images/book5.png'

export default class App extends Component {
  state = { activeItem: 'Books Trading' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid className="app-container">
        <Grid.Column width={3} className='sidebar height'>
          <Sidebar
            activeItem={activeItem}
            handleItemClick={this.handleItemClick}
          />
        </Grid.Column>

        <Grid.Column stretched width={12} className='content'>
          <Segment>
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
              <Request cardClass='request-book-card'/>

              : (activeItem === 'Create request')?
              <CreateRequest/>

              : (activeItem === 'Users')?
              <Users/>

              : (activeItem === 'Signup')?
              <Signup/>

              : (activeItem === 'Login')?
              <Login/>: null
            }
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
