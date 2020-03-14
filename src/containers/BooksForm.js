/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Slider } from 'material-ui-slider';
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
      author: '',
      urlImage: '',
      userId: '',
      readProgress: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }

  handleUrlChange(event) {
    const { value } = event.target;
    if (value !== '') {
      this.setState({
        urlImage: value,
      });
    }
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
    const {
      title, category, author, userId, readProgress,
    } = this.state;
    let { urlImage } = this.state;
    const { createBook } = this.props;

    if (title !== '' && category !== '' && author !== '') {
      const url = 'http://localhost:3000/books';

      if (urlImage === '') urlImage = 'https://static.thenounproject.com/png/132226-200.png';
      const response = axios.post(url, {
        id: newID(), title, category, author, urlImage, readProgress: '30', userId: '1',
      });
      const newBook = {
        id: newID(),
        title,
        author,
        category,
        urlImage,
        userId,
        readProgress,
      };
      console.log(`Im book: ${JSON.stringify(newBook)}`);
      createBook(newBook);
    }
    this.setState({
      title: '',
      category: '',
      author: '',
      urlImage: '',
      userId: '',
      readProgress: '',
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
    const {
      title, categories, author, urlImage,
    } = this.state;


    const marks = [
      {
        value: 0,
        label: '0',
      },
      {
        value: 20,
        label: '20',
      },
      {
        value: 37,
        label: '37',
      },
      {
        value: 100,
        label: '100',
      },
    ];

    function valuetext(value) {
      return `${value}`;
    }

    return (
      <div id="form-container">
        <p id="form-title">ADD NEW BOOK</p>
        <form>
          <div id="form-title-container">
            <input
              id="form-input-title"
              type="text"
              value={title}
              name={title}
              onChange={this.handleChange}
              placeholder="Book Title"
            />
            <input
              id="form-input-author"
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
            <input id="form-btn" type="button" value="ADD BOOK" onClick={this.handleSubmit} />
          </div>
          <div id="book-image-form">
            <input
              id="form-input-url"
              type="text"
              value={urlImage}
              name={urlImage}
              onChange={(e) => this.handleUrlChange(e)}
              placeholder="Url Book Cover"
            />
            <div id="slider-main-container">
              <p>Read Progress</p>
              <div id="slider-container">
                <Slider
                  id="slider-progress"
                  defaultValue={20}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider-custom"
                  step={10}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </div>
            </div>
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
