import React from 'react';
import ReactDOM from 'react-dom';
import {fetchBooks} from './fetch-books';
import './index.css';
import preloaderImg from './img/spinner.gif';

class Search extends React.Component {
  render() {
    return (
      <div id="search-block">
        <div 
          className="clear" 
          style={{
            'display': ( 
              this.props.query.length > 0 ? 'block' : 'none'
            )
          }}
          onClick={this.props.onClear}
        >
          <div className="clear__left"></div>
          <div className="clear__right"></div>
        </div>
        <input 
          type="text" 
          value={this.props.query}
          onChange={this.props.onChange}
          onKeyPress={(e) => {
            // imitating button click on tapping Enter key
            if (e.key === 'Enter'){
              this.props.onClick();
            }
          }} 
          placeholder="Type author, book name, subject..."  
        />
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
          <h2><a 
                href={link}
                rel="noopener noreferrer" target="_blank"
              >{title}</a></h2>
        </div>

        <div className="book__img-block">
          <img src={imgLink} alt={imgAlt} className="book__img" />
        </div>
  
        <div className="book__desc">
          <div className="book__field" title="author">
            <strong>Author:</strong> {author || 'Not Labeled'}
          </div>
          <div className="book__field">
            <strong>Publisher:</strong> {publisher}
          </div>
          <div className="book__field">
            <strong>Published:</strong> {published || 'n/a'}
          </div>
          <div className="book__field">
          {desc} 
          </div>
        </div>
      </div>
    );
  }
}

class Books extends React.Component {
  render() {
    if (this.props.loading){
      return (
        <div className="preloader">
          <img src={preloaderImg} alt="Preloader" />
          <div className="preloader__text">
            Content is loading...
          </div>
        </div>
      );
    } else if(this.props.volumes.length > 1){
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
    } else {
      return (
        <div className="flash-info">Nothing to show...</div>
      );
    }
  }
}

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      loading: false,
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
    this.setState({loading: true});
    fetchBooks(query)
      .then((found) => {
        this.setState({found, loading: false});
      })
  }
  handleClear() {
    this.setState({
      query: '',
      found: []
    });
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
            onClear={() => this.handleClear()} 
          />
        </div>
          <div id="books"> 
            <Books volumes={this.state.found} loading={this.state.loading} />
          </div>
        <footer>Made by <a href="https://deylenergy.github.io/portfolio" rel="noopener noreferrer" target="_blank">Deyl Energy</a></footer>
      </div>
    );
  }

}

ReactDOM.render(<Base />, document.getElementById('root'));