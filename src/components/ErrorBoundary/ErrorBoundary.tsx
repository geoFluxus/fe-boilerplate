// import * as Sentry from '@sentry/browser'
import React, { Component } from 'react'
import ErrorUI from './ErrorUI'

class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    console.log('--->', error, errorInfo)
  }

  render() {
    const { hasError } = this.state

    if (hasError) {
      return <ErrorUI />
    }

    return this.props.children
  }
}

export default ErrorBoundary
