import { Component } from 'react';
// import React, { Component } from 'react';
// import ErrorFallback from './ErrorFallback';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      this.props.routeToErrorPage(this.state.error);
      // return <ErrorFallback errorMessage={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
