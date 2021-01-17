import React from 'react';
import './Search.scss';
import {RiSearchLine} from 'react-icons/ri';

export const Search = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search and Find" />
      <RiSearchLine className="search__icon" size="14px"/>
    </div>
  );
};
