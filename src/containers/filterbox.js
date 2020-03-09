/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const FilterBox = (props) => {
  const { categories } = props;
  console.log(`Categories: ${JSON.stringify(props)}`);
  const options = () => {

  };
  return (
    <div>
      <select>
        <option>All</option>
        {options()}
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

FilterBox.propTypes = {
  categories: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(FilterBox);
