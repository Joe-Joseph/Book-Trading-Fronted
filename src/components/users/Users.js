import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import UserCard from './UserCard'
import { getAllUsers } from '../../actions/users/getAllUsers'

const Users = (props) => {
    useEffect(() => {
        const fetchUsers = async() => {
            await props.getAllUsers()
        }

        fetchUsers()
    }, [])
    return (
        <>
            <div className='user-cards'>
                {props.users &&
                    props.users.data &&
                    props.users.data.length > 0 &&
                    props.users.data.map((user) => (
                    <UserCard user={user}/>
                ))}
            </div>
            <div className='users-pagination'>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    users: state.allUsers.users
})

export default connect(mapStateToProps, { getAllUsers })(Users)
