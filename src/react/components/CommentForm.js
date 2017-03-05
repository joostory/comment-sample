import React, { Component, PropTypes } from 'react'

class CommentForm extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      ready: false
    }
  }

  handleAddComment(e) {
    e.preventDefault()
    const { onAdd } = this.props
    const { message } = this.refs

    if (!this.state.ready) {
      return
    }

    onAdd(message.value)
    message.value = ''
    this.setState({
      ready: false
    })
  }

  handleMessageChange(e) {
    this.setState({
      ready: e.target.value != ''
    })
  }

  render() {
    const { ready } = this.state
    return (
      <form className="form" onSubmit={this.handleAddComment.bind(this)}>
	  	<label>message</label>
        <input className="text" type='text' ref='message' onChange={this.handleMessageChange.bind(this)} />
        <button type='submit' disabled={!ready}>submit</button>
      </form>
    )
  }
}

CommentForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default CommentForm
