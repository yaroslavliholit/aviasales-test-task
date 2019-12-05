import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello'
    };
  }

  render() {
    return (
      <div>
        <h1>{ this.state.hello }</h1>
      </div>
    )
  }
}
