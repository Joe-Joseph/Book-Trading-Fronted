import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

import '../styles/messages.css'

class ErrorMessage extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header='Error'
          content={this.props.error}
          className='error-message'
        />
      )
    }return null
  }
}

export default ErrorMessage