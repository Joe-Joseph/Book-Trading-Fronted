import React from 'react';
import { Button } from 'semantic-ui-react'

import MultipleSelect from '../MultipleSelect'
import '../../styles/createRequest.css'

const CreateRequest = () => {
    return (
        <div className='create-request-container'>
            <p>Books to Give</p>
            <MultipleSelect />

            <p style={{ marginTop: '20px' }}>Books to Receive</p>
            <MultipleSelect />
            <br />

            <Button color='blue' className='submit-btn'>Submit</Button>
        </div>
    )
}

export default CreateRequest
