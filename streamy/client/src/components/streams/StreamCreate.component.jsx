import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm.component';
import { createStream } from '../../actions';

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Stream Create</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    stream: createStream
  };
};

export default connect(
  mapStateToProps,
  {
    createStream
  }
)(StreamCreate);
