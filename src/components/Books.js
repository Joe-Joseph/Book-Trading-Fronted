import React from 'react'

import BookCard from '../components/BookCard'

const Books = ({ cardClass }) => {
    return (
        <div className='books-container'  >
            <BookCard cardClass={ cardClass }/>
            <BookCard cardClass={ cardClass }/>
            <BookCard cardClass={ cardClass }/>
            <BookCard cardClass={ cardClass }/>
            <BookCard cardClass={ cardClass }/>
            <BookCard cardClass={ cardClass }/>
            <BookCard cardClass={ cardClass }/>
        </div>
    )
}

export default Books
