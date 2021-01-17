import React from 'react';
// Components
import {Header} from '../organisms/Header/Header';
import {Home} from '../pages/Home/Home';
import {Navbar} from '../organisms/Navbar/Navbar';
// Resources

export const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
    </>
  );
};
