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
  render() {
    return (
      <div id="books">
        <Book 
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tristique sem."
          link="https://books.google.com/"
          imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png"
          imgAlt="Book Title"
          author="John Doe" 
          publisher="Web Dev's Stuff"
          published="1970"
          desc="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tristique sem. Suspendisse at est vitae velit malesuada rutrum sed sed neque. Fusce enim nisi, dapibus vel gravida nec, vehicula ac libero. Aliquam erat volutpat. Donec sollicitudin metus at arcu malesuada pharetra. Nullam blandit turpis nec arcu bibendum, eu tincidunt est euismod.
          "
        />
      </div>
    ) 
  }
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
          <Books />
      </div>
    );
  }

}

ReactDOM.render(<Base />, document.getElementById('root'));