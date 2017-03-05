import React, { Component, PropTypes } from 'react'

import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentForm'

class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      comments: [
        {id: 5, message:'Hello', created: new Date(new Date().getTime() - 600000)},
        {id: 6, message:'Hi', created: new Date(new Date().getTime() - 500000)},
      ],
      count: 6,
      hasMoreComments: true
    }
  }

  handleLoadMore() {
    const { comments } = this.state
    this.setState({
      comments: [
        {id: 1, message: 'Comment 1', created: new Date(new Date().getTime() - 1000000)},
        {id: 2, message: 'Comment 2', created: new Date(new Date().getTime() - 900000)},
        {id: 3, message: 'Comment 3', created: new Date(new Date().getTime() - 800000)},
        {id: 4, message: 'Comment 4', created: new Date(new Date().getTime() - 700000)}
      ].concat(comments),
      hasMoreComments: false
    })
  }

  handleAdd(message) {
    const { comments, count } = this.state
    let newId = comments[comments.length - 1].id + 1
    this.setState({
      comments: comments.concat({id: newId, message: message, created: new Date()}),
      count: count + 1
    })
  }

  render() {
    const { comments, count, hasMoreComments } = this.state
    return (
      <div className="app">
        <div>{count} Comments</div>
        <CommentList comments={comments} hasMore={hasMoreComments} onLoadMore={this.handleLoadMore.bind(this)} />
        <CommentForm onAdd={this.handleAdd.bind(this)} />
      </div>
    )
  }
}

export default App
