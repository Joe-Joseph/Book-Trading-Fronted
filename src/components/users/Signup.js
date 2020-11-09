import React from 'react';
import { Input, Button } from 'semantic-ui-react'
import ErrorMessage from '../ErrorMessage'

import '../../styles/user.css'

const Signup = ({ submitUser, error, handleChange }) => {
    return (
        <div className='create-request-container'>
            <div className='form-container'>
                {error && error.error && <ErrorMessage error={error.error}/>}
                <Input
                    size='small'
                    fluid
                    name="firstName"
                    placeholder='First name'
                    onChange={handleChange}
                />
                <br />

                <Input
                    size='small'
                    fluid
                    placeholder='Last name'
                    name='lastName'
                    onChange={handleChange}
                />
                <br />

                <Input
                    size='small'
                    fluid
                    placeholder='username'
                    onChange={handleChange}
                    name='username'
                />
                <br />

                <Input
                    type='password'
                    size='small'
                    fluid
                    placeholder='password'
                    onChange={handleChange}
                    name='password'
                />
                <br />

                <Input
                    size='small'
                    fluid
                    placeholder='City'
                    name='city'
                    onChange={handleChange}
                />
                <br />

                <Button className='submit-btn' color='blue' onClick={submitUser}>Signup</Button>
            </div>
        </div>
    )
}


export default Signup
