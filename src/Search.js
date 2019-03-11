import React from 'react';

export default class Search extends React.Component {
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