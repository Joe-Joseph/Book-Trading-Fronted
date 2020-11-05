import React from 'react'
import { Card, Table } from 'semantic-ui-react'


import '../styles/user.css'


const UserCard = () => (
    <Card className='user-card'>
        <Table className='user-table'>
            <Table.Body>
            <Table.Row>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>James</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>City</Table.Cell>
                <Table.Cell>Kigali</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Books</Table.Cell>
                <Table.Cell>2</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Incoming books</Table.Cell>
                <Table.Cell>2</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Incoming books</Table.Cell>
                <Table.Cell>2</Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </Card>
)

export default UserCard
