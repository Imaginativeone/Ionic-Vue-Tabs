<template>
<ion-page>
  <tab-collection :tabs="pageTabs"></tab-collection>
</ion-page>
 <!-- <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>
       
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page> -->
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

import TabCollection from './TabCollection.vue';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';
import Tab3 from './Tab3.vue';
export default {
  name: 'Tabs',
  data:()=>({
    pageTabs:[
      {label:'tab 1',href:'/tabs/tab1',tab:'tab1',icon:ellipse},
      {label:'tab 2',href:'/tabs/tab2',tab:'tab2',icon:square},
      {label:'tab 3',href:'/tabs/tab3',tab:'tab3',icon:triangle},
      ]
  }),
  components: { 
    TabCollection,
    //IonLabel, 
    //IonTabs,
    // IonTabBar,
    // IonTabButton, 
    // IonIcon, 
   // IonPage 
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