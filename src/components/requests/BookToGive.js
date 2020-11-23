import React from 'react'
import { Grid } from 'semantic-ui-react'

import OneBook from './OneBook'

const BooksToGive = (props) => {
    return (
        <>
        {
            props.booksToGive
            && props.booksToGive.length > 0 &&
            <Grid.Column width={8}>
                <p className='request-title'>Books to Give</p>
                <div className='books-container'>
                    {
                        props.booksToGive.map((bookToGive) => (
                            <OneBook bookToGive={bookToGive}/>
                        )) 
                    }
                </div>
            </Grid.Column>
        }
        </>
    )
}

export default BooksToGive
