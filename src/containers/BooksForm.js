/* eslint-disable import/no-cycle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import newID from '../index';
import { addBook, deleteBook } from '../actions/actions';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      categories: [
        'Action',
        'Biography',
        'History',
        'Horror',
        'Kids',
        'Learning',
        'Sci-Fi',
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
  }

  handleChangeAuthor(event) {
    const { value } = event.target;
    this.setState({
      author: value,
    });
  }

  handleChange(event) {
    const { value } = event.target;
    if (value !== '') {
      this.setState({
        title: value,
      });
    }
  }

  handleSubmit() {
    const { title, category, author } = this.state;
    const { createBook } = this.props;
    if (title !== '' && category !== '' && author !== '') {
      const newBook = {
        id: newID(),
        title,
        author,
        category,
      };
      createBook(newBook);
    }
    console.log(`im created objec !!${JSON.stringify(this.state)} \n Props:${JSON.stringify(this.props)}`);
    this.setState({
      title: '',
      category: '',
      author: '',
    });
  }

  handleChangeSelect() {
    const select = document.getElementById('cbx-category-form');
    const name = select.options[select.selectedIndex].text;

    this.setState({
      category: name,
    });
  }

  render() {
    const { title, categories, author } = this.state;
    return (
      <div id="form-container">
        <p id="form-title">ADD NEW BOOK</p>
        <form>
          <div id="form-title-container">
            <input
              id="form-input"
              type="text"
              value={title}
              name={title}
              onChange={this.handleChange}
              placeholder="Title example: Lords of the Rings"
            />
            <input
              id="form-input"
              type="text"
              value={author}
              name={author}
              onChange={this.handleChangeAuthor}
              placeholder="Author"
            />
            <select className="form-cbx" onChange={this.handleChangeSelect} id="cbx-category-form">
              <option>Category</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
              ;
            </select>
            <input id="form-btn" type="button" value="Submit" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(addBook(book)),
  deleteBook: (book) => dispatch(deleteBook(book)),
});

BooksForm.propTypes = {
  createBook: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
