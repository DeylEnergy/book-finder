import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Search extends React.Component {
  render() {
    return (
      <div id="search-block">
        <input type="text" />
        <button id="search-btn">Search</button>
      </div>
    );
  }
}

class Book extends React.Component {

}

class Books extends React.Component {

}

class Base extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <header>
          <h1>Book Finder</h1>
        </header>
        <div id="content">
          <Search />
        </div>
      </div>
    );
  }

}

ReactDOM.render(<Base />, document.getElementById('root'));