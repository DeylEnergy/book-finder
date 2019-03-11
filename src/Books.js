import React from 'react';
import Book from './Book';
import preloaderImg from './img/spinner.gif';

export default class Books extends React.Component {
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