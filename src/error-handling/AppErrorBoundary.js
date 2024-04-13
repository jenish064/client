// import { Component } from 'react';
import React from 'react';
import ErrorFallback from './ErrorFallback';

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: ''
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.errorMessage) {
      this.props.routeToErrorPage(this.state.errorMessage);
      return <ErrorFallback errorMessage={this.state.errorMessage} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
