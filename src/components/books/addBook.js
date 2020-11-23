import React from 'react';
import { Input, Button } from 'semantic-ui-react'

import '../../styles/user.css'

const AddBook = ({ handleChange, submitBook }) => {
    return (
        <div className='create-request-container'>
            <div className='form-container'>
                <Input size='small' name="name" fluid placeholder='Book name' onChange={handleChange}/>
                <br />

                <Input size='small' name="author" fluid placeholder='Author' onChange={handleChange}/>
                <br />

                <Input type='file' name="image" onChange={handleChange} size='small' fluid placeholder='Author' />
                <br />

                <Button className='submit-btn' color='blue' onClick={submitBook}>Add New Book</Button>
            </div>
        </div>
    )
}

export default AddBook