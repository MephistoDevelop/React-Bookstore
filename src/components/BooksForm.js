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
            <option>Cathegory</option>
            {cathegories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
            ;
          </select>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BooksForm;
