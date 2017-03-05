import React, { Component, PropTypes } from 'react'

import Comment from './Comment'

class CommentList extends Component {
  render() {
    const { comments, hasMore, onLoadMore } = this.props
    return (
      <div>
        {hasMore &&
          <button className="btn-more" onClick={onLoadMore}>more comment</button>
        }
        {comments.map(item =>
          <Comment key={item.id} comment={item} />
        )}
      </div>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired
}

export default CommentList
