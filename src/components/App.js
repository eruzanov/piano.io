import React from 'react';
import Header from './Header';
import SearchResults from './SearchResults';
import './app.css';

export default () => ([
  <Header key={0}/>,
  <div key={1} className="container">
    <SearchResults/>
  </div>
]);