import React from 'react';
import { connect } from 'react-redux';

const newBook = {};
const BooksForm = (props) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];
  return (
    <div>
      <form>
        <div id='form-title-container'>
          <input type='text' placeholder='Title example: Lords of the Rings' />
          <br />
          <select id='cbx-category'>
            <option>Category</option>
            {categories.map((item) => (
              <option value={item}>{item}</option>
            ))}
            ;
          </select>
          <input value='submit' type='button' onClick={props.createBook} />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: () => dispatch({ type: 'CREATE_BOOK', params: newBook }),
    deleteBook: () => dispatch({ ype: 'DELETE_BOOK' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
