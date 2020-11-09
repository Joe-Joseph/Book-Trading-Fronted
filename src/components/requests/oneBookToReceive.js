import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getOneBook } from '../../actions/books/getOneBook'

const OneBookToReceive = ({ oneBookToReceive }) => {
    return (
        <>
        {oneBookToReceive && Object.keys(oneBookToReceive).length > 0 &&
        <Card className='one-request-card'>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={oneBookToReceive && oneBookToReceive.image && oneBookToReceive.image}
                />
                <Card.Header>{oneBookToReceive && oneBookToReceive.name}</Card.Header>
                <Card.Meta>{oneBookToReceive && oneBookToReceive.author}</Card.Meta>
                <Card.Description>
                    Added by <strong>{oneBookToReceive.user ? oneBookToReceive.user : 'Author'}</strong>
                </Card.Description>
            </Card.Content>
        </Card>}
        </>
    )
}

const mapStateToProps = state => ({
    book: state.oneBook.book
})

export default connect(mapStateToProps, { getOneBook })(OneBookToReceive)
// export default OneBookToReceive