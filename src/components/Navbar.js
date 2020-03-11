import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CategoryFilter from '../containers/CategoryFilter';

const NavBar = () => (
  <div id="navbar-container">
    <div id="main-title">Bookstore CMS</div>
    <div id="categories-text">Categories:</div>
    <div><CategoryFilter /></div>
    <div id="profile-icon-container"><div id="circle-profile"><FontAwesomeIcon id="profile-icon" icon={faUser} /></div></div>
  </div>
);
export default NavBar;
