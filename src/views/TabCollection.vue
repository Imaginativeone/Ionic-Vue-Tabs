<template>
  <div>{{ message }}</div>
</template>

// TODO: Make this into a reusable component
<script lang="ts">
export default {
  name: 'tab-collection',
  props: [
    'message'
    // name,
    // phoneNumber,
    // emailAddress
  ],
  // setup() {
  //   // return this;
  // },
}
</script>
