/* eslint-disable global-require */
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

  const changeProgress = () => {
    // const stringifyObject = require('stringify-object');
    const createKeyframe = require('create-keyframe');
    const insertCSS = require('insert-styles');


    const cssKeyframe = {
      0: {
        transform: 'rotate(0deg)',
      },
      100: { transform: 'rotate(180deg)' },
    };

    const keyframeObj = createKeyframe(cssKeyframe);
    insertCSS(keyframeObj.css, { id: 'animaton-tutorial-keyframe' });
  };

  return (
    <div className="td-container">
      <div className="content">
        <p className="category-text">{category}</p>
        <p className="title-text">{title}</p>
        <p className="author-text">{author}</p>
        <div className="btn-actions-container">
          <buton className="btn-book" type="button">Comments</buton>
          <buton className="btn-book btn-edit" type="button">Edit</buton>
          <buton className="btn-book" type="button" name={`bookid${id}`} value="Delete" onClick={() => deleteBook(id)}>Remove</buton>
        </div>
      </div>
      <ReadProgress />
      <div id="update-container">
        <div className="chapter-current">Current Chapter</div>
        <div className="chapter-title">Chapter 1</div>
        <input type="button" id="btn-animate" className="btn-update" onClick={changeProgress()} value="Update Progress" />
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
