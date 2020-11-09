import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const returnOptions = (books) => {
  const options = []
  for(let i=0; i<books.length; i++) {
    let book = {}
    book.value = books[i]._id
    book.label = `${books[i].name} by ${books[i].author}`

    options.push(book)
  }

  return options
}

const  MultipleSelect = ({books, name, handleChange}) => {
  const allBooks = books && returnOptions(books)

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={allBooks}
      onChange={handleChange}
      name={name}
    />
  );
}

export default MultipleSelect;
