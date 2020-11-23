import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getOneBook } from '../../actions/books/getOneBook'

const OneBook = ({ bookToGive }) => {
    return (
        <>
        {bookToGive && Object.keys(bookToGive).length > 0 &&
        <Card className='one-request-card'>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={bookToGive.image && bookToGive.image}
                />
                <Card.Header>{bookToGive.name}</Card.Header>
                <Card.Meta>{bookToGive.author}</Card.Meta>
                <Card.Description>
                    Added by <strong>{bookToGive.user ? bookToGive.user : 'Author'}</strong>
                </Card.Description>
            </Card.Content>
        </Card>}
        </>
    )
}

const mapStateToProps = state => ({
    book: state.oneBook.book
})

export default connect(mapStateToProps, { getOneBook })(OneBook)