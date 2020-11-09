import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import book3 from '../../images/book3.png'

import '../../styles/bookCard.css'


const BookCard = ({ cardClass, book }) => (
    <Card className={ cardClass }>
        <Image src={book.image && book.image.url ? book.image.url: book3} alt='Book one' wrapped className='book-image'/>
        <div className='book-content'>
            <h3>{book.name && book.name}</h3>
            <p>{book.author && book.author}</p>
        </div>
    </Card>
)

export default BookCard