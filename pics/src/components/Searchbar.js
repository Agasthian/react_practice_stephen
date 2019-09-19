import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchtext: ''
  };
  onChangeText = e => {
    this.setState({ searchtext: e.target.value });
  };
  onSubmitContent = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchtext);
  };
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onSubmitContent} className='ui form'>
          <div className='field'>
            <label> Search Images</label>
            <input
              type='text'
              placeholder='Enter Text'
              value={this.state.searchtext}
              onChange={this.onChangeText}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Searchbar;
