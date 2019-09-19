import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    term: ''
  };
  onTextInput = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <h4>Youtube Search React App</h4>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <input
            type='text'
            placeholder='Enter the search query'
            onChange={this.onTextInput}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default Searchbar;
