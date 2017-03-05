import React, { Component, PropTypes } from 'react'

class Comment extends Component {
  render() {
    const { comment } = this.props
    return (
      <div className="comment">
        <div className="info">{comment.created.toString()}</div>
        <div className="message">{comment.message}</div>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
}

export default Comment
