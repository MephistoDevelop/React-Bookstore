import React from 'react';
const BooksForm = () => {
  return (
    <div>
      <form>
        <div id='form-title-container'>
          <input type='text' placeholder='Title example: Lords of the Rings' />
          <select id='cbx-category'>
            <option>Catheory</option>
          </select>
          <buton>Submit</buton>
        </div>
      </form>
    </div>
  );
};

export default BooksForm;
