import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const OneRequest = () => {
    return (
        <Card className='one-request-card'>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                    Added by .... <strong>best friends</strong>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default OneRequest