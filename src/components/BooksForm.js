/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
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
    'Sci-Fi',
  ];

  const { createBook } = props;
  return (
    <div>
      <form>
        <div id="form-title-container">
          <input type="text" placeholder="Title example: Lords of the Rings" />
          <br />
          <select id="cbx-category">
            <option>Category</option>
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
            ;
          </select>
          <input value="submit" type="button" onClick={createBook} />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  createBook: () => dispatch({ type: 'CREATE_BOOK', params: newBook }),
  deleteBook: () => dispatch({ ype: 'DELETE_BOOK' }),
});


export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
