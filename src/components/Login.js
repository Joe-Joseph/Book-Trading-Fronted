import React from 'react';
import { Input, Button } from 'semantic-ui-react'

import '../styles/user.css'

const Login = () => {
    return (
        <div className='create-request-container'>
            <div className='form-container'>
                <Input size='small' fluid placeholder='username' />
                <br />

                <Input size='small' fluid placeholder='password' />
                <br />

                <Button className='submit-btn' color='blue'>Login</Button>
            </div>
        </div>
    )
}

export default Login