import React, { Component } from 'react';

export default class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(changeEvent) {
    const inputValue = changeEvent.target.value;
    const stateField = changeEvent.target.name;
    this.setState({
      [stateField]: inputValue,
    });
  }

  handleSubmit(submitEvent) {
    submitEvent.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Post text:</label>
        <input
          value={this.state.postText}
          onChange={this.handleChange}
          name="postText"
          type="text"
        />
        <br />
        <button type="submit">Post</button>
      </form>
    );
  }
}
