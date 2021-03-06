import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CategoryFilter from '../containers/CategoryFilter';

const NavBar = () => (
  <div id="navbar-container">
    <div id="main-title">Bookstore CMS</div>
    <div className="d-flex align-items-center">
      <div id="books-text">Books</div>
      <div><CategoryFilter /></div>
    </div>
    <div id="profile-icon-container"><div id="circle-profile"><FontAwesomeIcon id="profile-icon" icon={faUser} /></div></div>
  </div>
);
export default NavBar;
