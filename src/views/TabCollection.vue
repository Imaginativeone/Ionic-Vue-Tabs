<template>
  <!-- <div @click="showProps">{{ message }}</div> -->
  <!-- <div @click="showProps">{{ iMessage }}</div> -->
  <!-- <div>{{ testProp }}</div> -->
  <!-- <div @click="showProps"> -->
    <!-- <ion-label>{{ message }}</ion-label> -->
  <!-- </div> -->
   <ion-page>
  <ion-tabs >
      <ion-tab-bar slot="bottom">
      <ion-tab-button v-for="tab in tabs" :key="tab.label" :tab="tab.tab" :href="tab.href">
        <ion-icon :icon="tab.icon" />
        <ion-label>{{ tab.label }}</ion-label>
      </ion-tab-button>
      </ion-tab-bar>
  </ion-tabs>
   </ion-page>
</template>

// TODO: Make this into a reusable component
// TODO: Review the concept of Data Binding
<script lang="ts">
import { ellipse, square, triangle } from 'ionicons/icons';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';
import Tab3 from './Tab3.vue';
export default {
  name: 'TabCollection',
  props: {
    message: String,
    testProp: String,
    tabs: {type:Array, default:()=>[]}
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
  components: { 
    IonLabel, 
    IonTabs,
     IonTabBar,
     IonTabButton, IonIcon,
      IonPage ,
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
