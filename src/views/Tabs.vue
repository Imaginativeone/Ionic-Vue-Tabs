<template>
  <ion-page>
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

        <!-- {{ 4 }} -->
        <!-- Need props -->
        <!-- Need props handlers on the component -->
        <!-- <script>export default { -->
        <!-- props: [], -->
        <!-- Note: kebab case on the caller, camel case on the handler -->
        <!-- <tab-collection 
          message="New Tab"
          tabLabel="Tab Label"
          href="/tabs/tab3"
          sent-icon="square"
          name="Manuel Lorenz"
          phone-number="01234 78992"
          email-address="doug@dougfranklin.com"
          ></tab-collection> -->
          <TabCollection message="New Tab" test-prop="Test">
            <ion-tab-button tab="tab4" href="/tabs/tab4">
            <ion-icon :icon="square" />
            <ion-label>Tab 4</ion-label>
            </ion-tab-button>
          </TabCollection>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

import TabCollection from './TabCollection.vue';

export default {
  name: 'Tabs',
  components: { 
    TabCollection,
    IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage 
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