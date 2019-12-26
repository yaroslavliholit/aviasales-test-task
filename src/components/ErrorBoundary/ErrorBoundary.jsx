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
      <React.Fragment>
        {
          this.state.hasError
          ? <h1 className="error-indicator"> На сайте произошли технические ошибки </h1>
          : this.props.children
        }
      </React.Fragment>
    )
  }
}

