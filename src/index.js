import React from 'react';
import ReactDOM from 'react-dom';
import {fetchBooks} from './fetch-books';
import './index.css';

class Search extends React.Component {
  render() {
    return (
      <div id="search-block">
        <input type="text" onChange={this.props.onChange} />
        <button id="search-btn" onClick={this.props.onClick}>Search</button>
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
            <span className="book__author" title="author">{author || 'Not Labeled'}</span>
            &nbsp;
            <span className="book__publisher">
              {publisher}
            </span>
            &nbsp;
            <span className="book__published">{published || 'n/a'}</span>
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
    return this.props.volumes.map((book, id) => (    
      <Book
        key={id} 
        title={book.title}
        link={book.link}
        author={book.author}
        imgLink={book.imgLink}
        imgAlt={book.title}
        publisher={book.publisher}
        published={book.published}
        desc={book.desc}
      />           
    ));
  }
}

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      found: []
    };
    this.counter = 0;
  }
  handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }
  handleClick(){
    const {query} = this.state;
    if (!query) return;
    fetchBooks(query)
      .then((found) => {
        this.setState({found});
      })
  }
  render() {
    return (
      <div id="wrapper">
        <header>
          <h1>Book Finder</h1>
        </header>
        <div id="content">
          <Search 
            onChange={(e) => this.handleChange(e)}
            query={this.state.query} 
            onClick={() => this.handleClick()} 
          />
        </div>
          <div id="books"> 
            <Books volumes={this.state.found} />
          </div>
      </div>
    );
  }

}

ReactDOM.render(<Base />, document.getElementById('root'));