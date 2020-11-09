import React from 'react'

import UserCard from './UserCard'

import { Pagination } from 'semantic-ui-react'

const Users = () => {
    return (
        <>
            <div className='user-cards'>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
            <div className='users-pagination'>
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
    )
}

export default Users
