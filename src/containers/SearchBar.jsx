import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor () {
    super();

    this.state = { term: '' };
  }

  render () {
    return (
      <form className="input-group">
        <input
          type="text"
          placeholder="Enter city name for five-day forecast"
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Get weather</button>
        </span>
      </form>
    );
  }
}
