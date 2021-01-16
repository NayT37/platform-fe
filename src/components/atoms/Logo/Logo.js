import React from 'react';
// Resources
import logo from '../../../utils/img/logo.png';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="main-logo">
      <img src={logo} alt="Platform" />
    </div>
  );
};
