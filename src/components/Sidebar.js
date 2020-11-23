import React from 'react'
import { Menu } from 'semantic-ui-react'

const Sidebar = ({ activeItem, handleItemClick })  => {
    const token = localStorage.getItem('token');
    return (
      <div>
        <Menu fluid vertical tabular className='height'>
            <Menu.Item
              className='menu-item'
              name='Books Trading'
              active={activeItem === 'Books Trading'}
              onClick={handleItemClick}
            />
            {token !== 'null' && 
            <Menu.Item
              className='menu-item'
              name='Add New Book'
              active={activeItem === 'Add New Book'}
              onClick={handleItemClick}
            />}
            {token !== 'null'&&
            <Menu.Item
              className='menu-item'
              name='Create request'
              active={activeItem === 'Create request'}
              onClick={handleItemClick}
            />}
            <Menu.Item
              className='menu-item'
              name='All Requests'
              active={activeItem === 'All Requests'}
              onClick={handleItemClick}
            />
            <Menu.Item
              className='menu-item'
              name='Users'
              active={activeItem === 'Users'}
              onClick={handleItemClick}
            />

            {token === 'null' &&
            <Menu.Item
              className='menu-item signup-menu-item'
              name='Signup'
              active={activeItem === 'Signup'}
              onClick={handleItemClick}
            />}
            {token === 'null' &&
            <Menu.Item
              name='Login'
              className='menu-item'
              active={activeItem === 'Login'}
              onClick={handleItemClick}
            />}

            {token !== 'null' &&
            <Menu.Item
              className='menu-item signup-menu-item'
              name='Profile'
              active={activeItem === 'Profile'}
              onClick={handleItemClick}
            />}

            {token !== 'null' &&
            <Menu.Item
              className='menu-item'
              name='Logout'
              active={activeItem === 'Logout'}
              onClick={handleItemClick}
            />}
          </Menu>
        </div>
    )
}

export default Sidebar
