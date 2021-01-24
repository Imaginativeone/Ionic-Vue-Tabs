<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="Tab 1 page"></ExploreContainer>
      <tab-collection></tab-collection>
    </ion-content>
  </ion-page>
</template>

<!-- Push this to the Git Remote -->
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

import TabCollection from './TabCollection.vue';

export default  {
  name: 'Tab1',
  components: { 
    ExploreContainer, 
    TabCollection,
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>