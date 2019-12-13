import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return (
      <div>
        {
          this.state.hasError
          ? <h1> На сайте произошли технические ошибки </h1>
          : this.props.children
        }
      </div>
    )
  }
}

