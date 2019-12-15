import React, { Component } from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error.message,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      alert(`
      Something went wrong

      Error message: ${this.state.error}


      Where occured: ${this.state.errorInfo.componentStack}`);
    }
    return this.props.children;
  }
}
