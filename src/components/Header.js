// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  padding: 0,
  justifyContent: 'flex-end',
};

const headerStyle = {
   
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 45px',
    transition: 'background-color 0.3s ease',
    backgroundColor: 'black',
   
  };
const logoStyle = {
    width: '70px',
    height: 'auto',
    transition: 'opacity 0.3s ease',
    opacity: 1,
    cursor: 'pointer', // Add cursor pointer for indicating it's clickable
  };

const listItemStyle = {
  marginRight: '30px',
  transition: 'opacity 0.3s ease', // Add transition for opacity change
  opacity: 1, // Set the initial opacity for list items
};

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  
};

const Header = () => {

  
  return (
    <header style={headerStyle} className="header-fade">
  <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  <img
    src={process.env.PUBLIC_URL + '/images/logo1.png'}
    alt="Logo"
    style={logoStyle}
    className="logo-fade"
  />
  <span style={{ marginLeft: '10px', fontSize: '18px', color: 'white' }}>शिवश्यामा धाम धर्मर्थ सेवा ट्रस्ट, मधुपुर</span>
</Link>

      <nav>
        <ul style={navStyle}>
          <li style={listItemStyle} className="list-item-fade">
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li style={listItemStyle} className="list-item-fade">
            <Link to="/about" style={linkStyle}>
              About Us
            </Link>
          </li>
          <li style={listItemStyle} className="list-item-fade">
            <Link to="/gallery" style={linkStyle}>
              Gallery
            </Link>
          </li>
          <li style={listItemStyle} className="list-item-fade">
            <Link to="/contact" style={linkStyle}>
              Contact Us
            </Link>
          </li>
          <li style={listItemStyle} className="list-item-fade">
            <Link to="/donation" style={linkStyle}>
              Donation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
