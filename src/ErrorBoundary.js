// mostly code from reactjs.org/docs/errorboundaries.html

import React, { Component } from 'react'
import { Link } from '@react/router'

class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError () {
    return { hasError: true };
  }
  componentDidCatch(eror, info) {
    // Would normally send to consolidated logging service
    console.error(`Error boundary caught error: ${error}, info: ${info}`);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing link. <Link to='/'>Click here</Link>
          to go back to the home page or wait 5 seconds
        </h1>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
