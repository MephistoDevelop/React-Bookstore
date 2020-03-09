/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const CategoryFilter = (props) => {
  const { categories } = props;

  const options = () => {
    console.log(`Categories: ${JSON.stringify(props)}`);
    return (categories.map((cat) => (
      <option key={cat} name={cat}>
        {' '}
        {cat}
      </option>
    )));
  };
  return (
    <div>
      <select>
        {options()}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
  categories: state.categories,
});

CategoryFilter.propTypes = {
  categories: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(CategoryFilter);
