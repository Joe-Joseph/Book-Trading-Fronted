import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getAllRequests } from '../../actions/requests/getAllRequests'
import BooksToReceive from './BookToReceive'
import BooksToGive from './BookToGive';

const Requests = (props) => {
    useEffect(() => {
        const fetchRequests = async() => {
            await props.getAllRequests()
        }
        fetchRequests()
    }, [])
    return (
        <Grid>
            {
                props.requests
                && props.requests.length > 0
                && props.requests.map((request) => (
                <Grid.Row className="one-request">
                    <BooksToGive booksToGive={request.booksToGive}/>
                    <BooksToReceive booksToReceive={request.booksToReceive}/>
                </Grid.Row>
            ))}
        </Grid>
    )
}

const mapStateToProps = state => ({
    requests: state.allRequests.requests
})

export default connect(mapStateToProps, { getAllRequests })(Requests)
