import React, { useEffect, useState, Component } from 'react';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';

import { createRequest } from '../../actions/requests/createRequest'
import { getAllBooks } from '../../actions/books/getAllBooks'
import MultipleSelect from '../MultipleSelect'
import '../../styles/createRequest.css'

class CreateRequest extends Component {
    state = {
        booksTogive: [],
        booksToReceive: [],
        booksToGiveRequest: [],
        booksToReceiveRequest: []
    }

    getBooks = (books, userId) => {
        const booksTogive = []
        const booksToReceive = []
        for(let i=0; i<books.length; i++) {
            if(books[i].userId === userId){
                booksTogive.push(books[i])
            }else{
                booksToReceive.push(books[i])
            }
        }

        return {
            booksTogive,
            booksToReceive
        }
    }

    getData = (data) => {
        let books = []
        for(let i=0; i<data.length; i++){
            books.push({
                bookId: data[i].value
            })
        }
        return books
    }

    handleChange = (e, data) => {
        if(data.name === 'booksToGive'){
            const allBooksToGive = e && this.getData(e)
            this.setState({
                ...this.state,
                booksToGiveRequest: allBooksToGive,
            })
        }
    
        if(data.name === 'booksToReceive') {
            const allBooksToReceive = e && this.getData(e)
            this.setState({
                ...this.state,
                booksToReceiveRequest: allBooksToReceive,
            })
        }
    }

    handleSubmit = async() => {
        const { createRequest, handleRedirect } = this.props
        const { booksToGiveRequest, booksToReceiveRequest } = this.state
        const newRequest = {
          booksToGive: booksToGiveRequest,
          booksToReceive: booksToReceiveRequest
        }
        await createRequest(newRequest)
        const { request } = this.props
        if(request && request.status && request.status === 201) {
            handleRedirect('All Requests')
        }
    }
    componentDidMount = () => {
        const { getAllBooks, books } = this.props
        const userId = localStorage.getItem('userId')
        const fetchBooks = async() => {
            await getAllBooks()
        }

        fetchBooks()
        const { booksTogive, booksToReceive } = this.getBooks(books.data, userId)
        this.setState({
            ...this.state,
            booksTogive,
            booksToReceive
        })
    }

    render() {
        const {
            booksTogive,
            booksToGiveRequest,
            booksToReceiveRequest,
            booksToReceive
        } = this.state
        return (
            <div className='create-request-container'>
                <p>Books to Give</p>
                <MultipleSelect
                    books={booksTogive}
                    name='booksToGive'
                    handleChange={this.handleChange}
                />

                <p style={{ marginTop: '20px' }}>Books to Receive</p>
                <MultipleSelect
                    books={booksToReceive}
                    name='booksToReceive'
                    handleChange={this.handleChange}
                />
                <br />

                <Button
                    color='blue'
                    onClick={this.handleSubmit}
                    className='submit-btn'
                    disabled={(
                        booksToGiveRequest
                        && booksToGiveRequest.length < 1)
                        || (booksToReceiveRequest
                        && booksToReceiveRequest.length < 1
                    )}
                >Submit</Button>
            </div>
        )
    }


    
}

const mapStateToProps = state => ({
    request: state.newRequest.request,
    error: state.newRequest.error,
    books: state.allBooks.books
  })
  
  export default connect(mapStateToProps, { createRequest, getAllBooks })(CreateRequest)
