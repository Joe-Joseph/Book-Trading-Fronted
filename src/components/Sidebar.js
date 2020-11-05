import React from 'react'
import { Menu } from 'semantic-ui-react'

const Sidebar = ({ activeItem, handleItemClick })  => {
    return (
      <div>
        <Menu fluid vertical tabular className='height'>
            <Menu.Item
              name='Books Trading'
              active={activeItem === 'Books Trading'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Create request'
              active={activeItem === 'Create request'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='All Request'
              active={activeItem === 'All Request'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Users'
              active={activeItem === 'Users'}
              onClick={handleItemClick}
            />

            <Menu.Item
              className='signup-menu-item'
              name='Signup'
              active={activeItem === 'Signup'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={handleItemClick}
            />
          </Menu>
        </div>
    )
}

export default Sidebar
