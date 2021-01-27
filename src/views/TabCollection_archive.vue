<template>
  <!-- <div @click="showProps">{{ message }}</div> -->
  <!-- <div @click="showProps">{{ iMessage }}</div> -->
  <!-- <div>{{ testProp }}</div> -->
  <!-- <div @click="showProps"> -->
    <!-- <ion-label>{{ message }}</ion-label> -->
  <!-- </div> -->
  <ion-tab-button tab="tab3" href="/tabs/tab3">
    <ion-icon :icon="square" />
    <ion-label>{{ message }}</ion-label>
  </ion-tab-button>
</template>

// TODO: Make this into a reusable component
// TODO: Review the concept of Data Binding
<script lang="ts">
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'TabCollection',
  props: {
    message: String,
    testProp: String,
    tab: String
  },
  data() {
    return {
      iMessage: 1
    }
  },
  methods: {
    showProps() {
      console.log('showProps()');
      // console.log(this);
    }
  },
    setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  },
}
</script>
