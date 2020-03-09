/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { deleteBook } from '../actions/actions';


const Book = (props) => {
  const {
    id, title, category, deleteBook,
  } = props;

  return (
    <div className="td-container">
      <table>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>
          <input type="button" name={`bookid${id}`} value="Delete" onClick={() => deleteBook(id)} />
        </td>
      </table>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  deleteBook: (id) => dispatch(deleteBook(id)),
});

Book.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  deleteBook: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Book);
