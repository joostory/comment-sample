<template>
	<div>
        <button v-if="hasMore" class="btn-more" v-on:click="onLoadMore">more comment</button>
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
	</div>
</template>

<script>
import Comment from './Comment'

export default {
	name: 'list',
    props: [
        'comments',
        'hasMore'
    ],
    model: {
        event: "onLoadMore"
    },
    methods: {
        onLoadMore: function(e) {
            this.$emit('onLoadMore')
        }
    },
    components: { Comment }
}
</script>
