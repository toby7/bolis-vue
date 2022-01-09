<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Ta kort på vinlista</ion-title>
                </ion-toolbar>    
        </ion-header>
        <ion-content>
            <ion-fab vertical="center" horizontal="center" slot="fixed">
                <ion-fab-button @click="handleClick">
                    <ion-icon :icon="cameraOutline" size="large"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/vue";
// import {Plugins, CameraResultType, CameraSource } from 'capacitor/core';

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
  },
  methods: {
    // async takePhoto() {
    //   const image = Plugins.Camera.getPhoto({
    //     quality: 100,
    //     allowEditing: false,
    //     resultType: CameraResultType.DataUrl,
    //     source: CameraSource.Camera
    //   })

    //   alert(image);
    // },

    // handleClick: function(){
    //   return this.takePhoto(); 
    // },
    // submit () {
    //   navigator.mediaDevices.getUserMedia({
    //    video: true
    //  })
    // }
  }
}
</script>