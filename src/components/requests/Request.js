import React from 'react'
import { Grid } from 'semantic-ui-react'

import OneRequest from './OneRequest'

const Requests = () => {
    return (
        <Grid>
            <Grid.Row className="one-request">
                <Grid.Column width={8}>
                    <p className='request-title'>Books to Give</p>
                    <div className='books-container'  >
                        <OneRequest />
                        <OneRequest />
                    </div>

                </Grid.Column>
                <Grid.Column width={8}>
                    <p className='request-title'>Books to Receive</p>
                    <div className='books-container'>
                        <OneRequest />
                    </div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row className="one-request">
                <Grid.Column width={8}>
                    <p className='request-title'>Books to Give</p>
                    <div className='books-container'  >
                        <OneRequest />
                    </div>

                </Grid.Column>
                <Grid.Column width={8}>
                    <p className='request-title'>Books to Receive</p>
                    <div className='books-container'>
                        <OneRequest />
                    </div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row className="one-request">
                <Grid.Column width={8}>
                    <p className='request-title'>Books to Give</p>
                    <div className='books-container'  >
                        <OneRequest />
                    </div>

                </Grid.Column>
                <Grid.Column width={8}>
                    <p className='request-title'>Books to Receive</p>
                    <div className='books-container'>
                        <OneRequest />
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Requests
