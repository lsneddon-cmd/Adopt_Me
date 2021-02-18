// mostly code from reactjs.org/docs/errorboundaries.html

import React, { Component } from 'react'
import { Link } from '@reach/router'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError () {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Would normally send to consolidated logging service
    console.error(`Error boundary caught error: ${error}, info: ${info}`);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing link. <Link to='/'>Click here </Link>
          to go back to the home page or wait 5 seconds
        </h1>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
