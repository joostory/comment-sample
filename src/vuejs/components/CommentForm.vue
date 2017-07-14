<template>
  <form class="form" v-on:submit.prevent="onAdd">
    <label>message</label>
    <input ref="message" class="text" type='text' />
    <button type='submit'>submit</button>
  </form>
</template>

<script>
export default {
  name: 'form',
  model: {
    event: "onAdd"
  },
  methods: {
    onAdd: function (e) {
      this.$emit('onAdd', this.$refs.message.value)
      this.$refs.message.value = ""
    }
  }
}
</script>
