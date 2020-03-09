/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-parens */
import React from 'react';
import { connect } from 'react-redux';
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

export default connect(null, mapDispatchToProps)(Book);
