import React from 'react'
import { Grid, Segment, Pagination } from 'semantic-ui-react'

import BookCard from '../components/BookCard'

const Requests = ({cardClass}) => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={8}>
                    <p className='request-title'>Books to give</p>
                    <div className='books-container'  >
                        <BookCard cardClass={cardClass}/>
                        <BookCard cardClass={cardClass}/>
                        <BookCard cardClass={cardClass}/>
                        <BookCard cardClass={cardClass}/>
                    </div>

                    <div className='pagination'>
                        <Pagination
                            defaultActivePage={1}
                            firstItem={null}
                            lastItem={null}
                            pointing
                            secondary
                            totalPages={3}
                        />
                    </div>

                </Grid.Column>
                <Grid.Column width={8}>
                    <p className='request-title'>Books to receive</p>
                    <div className='books-container'>
                        <BookCard cardClass={cardClass}/>
                        <BookCard cardClass={cardClass}/>
                        <BookCard cardClass={cardClass}/>
                        <BookCard cardClass={cardClass}/>
                    </div>

                    <div className='pagination'>
                        <Pagination
                            defaultActivePage={1}
                            firstItem={null}
                            lastItem={null}
                            pointing
                            secondary
                            totalPages={3}
                        />
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Requests
