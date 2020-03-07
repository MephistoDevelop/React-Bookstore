import React from 'react';
const BooksForm = () => {
  const cathegories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];
  return (
    <div>
      <form>
        <div id='form-title-container'>
          <input type='text' placeholder='Title example: Lords of the Rings' />
          <br />
          <select id='cbx-category'>
            <option>Category</option>
            {cathegories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
            ;
          </select>
          <input value='submit' type='button' />
        </div>
      </form>
    </div>
  );
};

export default BooksForm;
