import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  };

  renderField = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field
          name='title'
          component={this.renderField}
          label={'Enter the title of the stream'}
        />
        <Field
          name='description'
          component={this.renderField}
          label={'Enter the description'}
        />
        <button className='ui primary button'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter the title';
  }
  if (!formValues.description) {
    errors.description = 'Pls enter the description 😅 ';
  }
  return errors;
};

const formWrapper = reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);

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
)(formWrapper);
