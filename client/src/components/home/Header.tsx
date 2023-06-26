import React from 'react';
import SearchBar from '../SearchBar';
import Home from '../../assets/Home.png';

function Header() {
  return (
    <header className="my-16 max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap items-center justify-around border-2 border-blue-200 rounded-3xl shadow-md shadow-blue-200">
        <img className="xl:w-44 md:w-32 w-16" src={Home} alt="frame" />
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
