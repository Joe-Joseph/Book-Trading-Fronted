import React, { useState } from 'react'
import { Card, Table, Button } from 'semantic-ui-react'
import EditUser from './EditUser'

import '../../styles/user.css'


const UserCard = ({ user }) => {
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }
    
    return(
        <>
        <Card className='user-card'>
            <Table className='user-table'>
                <Table.Body>
                <Table.Row>
                    <Table.Cell>First Name</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>{user && user.firstName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Last Name</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>{user && user.lastName}</Table.Cell>
                </Table.Row>
                {
                    user && user._id === localStorage.getItem('userId') &&
                    <Table.Row>
                        <Table.Cell>Username</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell>{user && user.username}</Table.Cell>
                    </Table.Row>
                }
                <Table.Row>
                    <Table.Cell>City</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>{user && user.city}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Address</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell>{user && user.address && user.address}</Table.Cell>
                </Table.Row>
                {
                    user && user._id === localStorage.getItem('userId') &&
                    <Table.Row>
                        <Table.Cell></Table.Cell>
                            <Table.Cell><Button color='blue' onClick={openModal}>Edit</Button></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                }
                </Table.Body>
            </Table>
        </Card>
        <EditUser
            open={open}
            openModal={openModal}
            closeModal={closeModal}
            user={user && user}
        />
        </>
    )
}

export default UserCard
