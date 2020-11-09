import React from 'react';
import { Input, Button } from 'semantic-ui-react'

import ErrorMessage from '../ErrorMessage'

import '../../styles/user.css'

const Login = ({
    handleLoginSubmit,
    handleChange,
    error
}) => {
    return (
        <div className='create-request-container'>
            <div className='form-container'>
                {error && error.error && <ErrorMessage error={error.error}/>}
                <Input
                    size='small'
                    fluid
                    placeholder='username'
                    name='username'
                    onChange={handleChange}
                />
                <br />

                <Input
                    type='password'
                    size='small'
                    fluid
                    placeholder='password'
                    name='password'
                    onChange={handleChange}
                />
                <br />

                <Button
                    className='submit-btn'
                    color='blue'
                    onClick={handleLoginSubmit}
                >Login</Button>
            </div>
        </div>
    )
}

export default Login