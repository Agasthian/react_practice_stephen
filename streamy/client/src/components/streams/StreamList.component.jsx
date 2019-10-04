import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui primary button'>
            Edit
          </Link>
          <Link to='/streams/delete' className='ui negative button'>
            Delete
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          {this.renderAdmin(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  renderCreateStreamBtn(isSignedIn) {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to='/streams/new' className='ui primary button'>
            Create New Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
        {this.renderCreateStreamBtn()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
