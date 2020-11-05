import React from 'react';
import { Input, Button } from 'semantic-ui-react'

import '../styles/user.css'

const Signup = () => {
    return (
        <div className='create-request-container'>
            <div className='form-container'>
                <Input size='small' fluid placeholder='First name' />
                <br />

                <Input size='small' fluid placeholder='Last name' />
                <br />

                <Input size='small' fluid placeholder='username' />
                <br />

                <Input type='password' size='small' fluid placeholder='password' />
                <br />

                <Input size='small' fluid placeholder='City' />
                <br />

                <Button className='submit-btn' color='blue'>Signup</Button>
            </div>
        </div>
    )
}

export default Signup