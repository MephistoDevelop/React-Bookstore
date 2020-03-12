/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteBook } from '../actions/actions';
import ReadProgress from './ReadProgress';

const Book = (props) => {
  const {
    id, title, category, deleteBook, author,
  } = props;

  return (
    <div className="td-container">
      <div className="content">
        <p className="category-text">{category}</p>
        <p className="title-text">{title}</p>
        <p className="author-text">{author}</p>
        <div className="btn-actions-container">
          <buton className="btn-book" type="button">Comments</buton>
          <buton className="btn-book btn-edit" type="button">Edit</buton>
          <buton className="btn-book" type="button">Remove</buton>
        </div>
      </div>
      <ReadProgress />
      <div className="btn-container">
        <input className="btn" type="button" name={`bookid${id}`} value="Delete" onClick={() => deleteBook(id)} />
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  deleteBook: (id) => dispatch(deleteBook(id)),
});

Book.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  deleteBook: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Book);
