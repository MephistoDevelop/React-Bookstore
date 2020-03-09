/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import newID from '../index';
import books from '../reducers/books';
import {addBook,deleteBook} from '../actions/actions';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      name:'',
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
  }

  handleChange = (event) =>{
  const { value } = event.target;
  this.setState({
    title:value,
  });
}
 handleSubmit = () => {
  const newBook =  {
    id:newID(),
    title:this.state.title,
    category: this.state.category
   };

   this.props.createBook(newBook);
   this.setState({
     title:'',
     category:''
   });
};

handleChangeSelect = (event) =>{
  const select = document.getElementById('cbx-category');
  const name=select.options[select.selectedIndex].text;
  this.setState({
    category:name
  });
};

  render() {
    const { title, category, categories } = this.state;
    return (
      <div>
        <form >
          <div id="form-title-container">
            <input type="text" value={title} name={title} onChange={this.handleChange} placeholder="Title example: Lords of the Rings" />
            <br />
            <select onChange={this.handleChangeSelect} id="cbx-category">
              <option>Category</option>
              {categories.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
                ;
            </select>
            <input type="button" value="Submit" onClick={this.handleSubmit}/>
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
