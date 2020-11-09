import React from 'react'
import { Grid } from 'semantic-ui-react'

import OneBookToReceive from './oneBookToReceive'

const BooksToReceive = ({ booksToReceive }) => {
    return (
        <>
        {
            booksToReceive &&
            booksToReceive.length > 0 &&
            <Grid.Column width={8}>
                <p className='request-title'>Books to Receive</p>
                <div className='books-container'>
                    {
                        booksToReceive.map((oneBookToReceive) => (
                            <OneBookToReceive oneBookToReceive={oneBookToReceive} />
                        ))
                    }
                </div>
            </Grid.Column>
        }
        
        </>
    )
}

export default BooksToReceive
