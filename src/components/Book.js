/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-parens */
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteBook } from '../actions/actions';
import ReadProgress from './ReadProgress';

const Book = (props) => {
  const {
    id, title, category, deleteBook, author, urlImage,
  } = props;

  const deleteBookAPI = () => {
    axios.delete(`https://mephistodevelop-bookstore-api.herokuapp.com/books/${id}`, { headers: { 'Access-Control-Allow-Origin': '*' }, params: { } });
  };

  const bookImage = () => {
    if (urlImage !== '') {
      return (<img className="bg" src="https://static.thenounproject.com/png/132226-200.png" />);
    }
    return (<img className="bg" src="https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />);
  };


  return (
    <div className="td-container">
      <div id="content-container">
        <div className="image-container">
          {bookImage()}
        </div>
        <div className="content">
          <p className="category-text">{category}</p>
          <p className="title-text">{title}</p>
          <p className="author-text">{author}</p>
          <div className="btn-actions-container">
            <buton className="btn-book" type="button">Comments</buton>
            <buton className="btn-book btn-edit" type="button">Edit</buton>
            <buton
              className="btn-book"
              type="button"
              name={`bookid${id}`}
              value="Delete"
              onClick={() => {
                deleteBook(id);
                deleteBookAPI();
              }}
            >
Remove
            </buton>
          </div>
        </div>
        <ReadProgress />
        <div id="update-container">
          <div className="chapter-current">Current Chapter</div>
          <div className="chapter-title">Chapter 1</div>
          <input type="button" id="btn-animate" className="btn-update" value="Update Progress" />
        </div>
      </div>
      <div id="comments-container">
        Comments:

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
