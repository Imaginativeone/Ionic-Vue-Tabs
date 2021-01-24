<template>
  <!-- <div>{{ message }}</div> -->
  <!-- <div>{{ testProp }}</div> -->
  <div>
    <!-- <ion-label>{{ message }}</ion-label> -->
    <slot></slot>
  </div>
</template>

// TODO: Make this into a reusable component
// TODO: Review the concept of Data Binding
<script lang="ts">

export default {
  name: 'TabCollection',
  props: [
    'message', 
    'testProp'
  ]
}
</script>
