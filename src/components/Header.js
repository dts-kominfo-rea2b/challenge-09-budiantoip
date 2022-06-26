// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <div className='header'>
        <h1>Call a Friend</h1>
        <h3>your friendly contact app</h3>
      </div>
    );
}

export default Header;