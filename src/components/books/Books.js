import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import BookCard from './BookCard'
import { getAllBooks } from '../../actions/books/getAllBooks'

const Books = (props) => {
    useEffect(() => {
        const fetchBooks = async() => {
            await props.getAllBooks()
        }
        fetchBooks()
    }, [])
    return (
        <div className='books-container'>
            {
                props.books
                && props.books.data
                && props.books.data.length > 0
                && props.books.data.map((book) => (
                <BookCard
                    cardClass={ props.cardClass }
                    book={book}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    books: state.allBooks.books
})

export default connect(mapStateToProps, { getAllBooks })(Books)
