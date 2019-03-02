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
  render() {
    const {
      title,
      link,
      imgLink,
      imgAlt,
      author,
      publisher,
      published,
      desc
    } = this.props
    return (
      <div className="book">
        <div className="book__title">
          <h2><a href={link}>{title}</a></h2>
        </div>

        <div className="book__img-block">
          <img src={imgLink} alt={imgAlt} className="book__img" />
        </div>
  
        <div className="book__desc">
          <div className="book__info">
            <span className="book__author" title="author">{author}</span>
            &nbsp;
            <span className="book__publisher">
              {publisher}
            </span>
            &nbsp;
            <span className="book__published">{published}</span>
          </div>
          <p>
            {desc} 
          </p>
        </div>
      </div>
    );
  }
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