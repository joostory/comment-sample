<template>
<div class="comment">
  <div class="info">{{comment.created.toString()}}</div>
  <div class="message">{{comment.message}}</div>
</div>
</template>

<script>
export default {
    name: 'comment',
	props: [ "comment" ]
}
</script>
