<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Ta kort på vinlista</ion-title>
                </ion-toolbar>    
        </ion-header>
        <ion-content>
            <ion-fab vertical="center" horizontal="center" slot="fixed">
                <ion-fab-button>
                    <ion-icon :icon="cameraOutline" size="large"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/vue";

import { 
  cameraOutline
} from 'ionicons/icons';

export default {
components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFab, 
    IonFabButton,
    IonIcon 
},
setup() {
    return {
      cameraOutline
    }
  }
}
</script>
