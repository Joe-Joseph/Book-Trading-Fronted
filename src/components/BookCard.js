import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import book1 from '../images/book1.png'
import book2 from '../images/book2.png'
import book3 from '../images/book3.png'
import book4 from '../images/book4.png'
import book5 from '../images/book5.png'

import '../styles/bookCard.css'


const BookCard = ({ cardClass }) => (
    <Card className={ cardClass }>
        <Image src={book5} alt='Book one' wrapped className='book-image'/>
        <div className='book-content'>
            <h3>Book name</h3>
            <p>Author</p>
        </div>
    </Card>
)

export default BookCard