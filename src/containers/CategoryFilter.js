/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.options = this.options.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  options() {
    const { categories } = this.props;
    console.log(`Categories: ${JSON.stringify(this.props)}`);
    return (categories.map((cat) => (
      <option key={cat} name={cat}>
        {' '}
        {cat}
      </option>
    )));
  }

  handleChange(event) {
    const cbx = event.target;
    const categoryName = cbx.options[cbx.selectedIndex].text;
    console.log(`Soy cbx: ${categoryName}`);
  }

  render() {
    return (
      <div>
        <select id="cbx-category" onChange={((e) => this.handleChange(e))}>
          {this.options()}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
  categories: state.categories,
});

CategoryFilter.propTypes = {
  categories: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(CategoryFilter);
