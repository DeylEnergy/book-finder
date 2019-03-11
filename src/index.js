import React from 'react';
import ReactDOM from 'react-dom';
import {fetchBooks} from './fetch-books';
import './index.css';

import Search from './Search';
import Books from './Books';

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