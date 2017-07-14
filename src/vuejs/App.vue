<template>
  <div class="app">
    <div>{{count}} Comments</div>
    <CommentList :comments="comments" :hasMore="hasMore" @onLoadMore="onLoadMore" />
    <CommentForm @onAdd="onAdd" />
  </div>
</template>

<script>
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'

let data = {
  comments: [
    { id: 5, message: "Comment 5", created: new Date(new Date().getTime() - 60000) },
    { id: 6, message: "Comment 6", created: new Date(new Date().getTime() - 50000) }
  ],
  count: 6,
  hasMore: true
}

export default {
  name: 'app',
  data() {
    return data
  },
  methods: {
    onAdd: function (message) {
      let newId = data.comments[data.comments.length - 1].id + 1
      Object.assign(data, {
        comments: data.comments.concat({ id: newId, message: message, created: new Date() }),
        count: data.count + 1
      })
    },
    onLoadMore: function () {
      Object.assign(data, {
        comments: [
          { id: 1, message: 'Comment 1', created: new Date(new Date().getTime() - 1000000) },
          { id: 2, message: 'Comment 2', created: new Date(new Date().getTime() - 900000) },
          { id: 3, message: 'Comment 3', created: new Date(new Date().getTime() - 800000) },
          { id: 4, message: 'Comment 4', created: new Date(new Date().getTime() - 700000) }
        ].concat(data.comments),
        hasMore: false
      })
    }
  },
  components: { CommentList, CommentForm }
}
</script>

<style>

</style>
