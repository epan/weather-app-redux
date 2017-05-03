import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor () {
    super();

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange (e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit (e) {
    e.preventDefault();
  }

  render () {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter city name for five-day forecast"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Get weather</button>
        </span>
      </form>
    );
  }
}
