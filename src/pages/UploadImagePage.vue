<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="ion-text-center">
                  Bolis
                  <span class="version-text">(Beta 1.0)</span>
                </ion-title>
            </ion-toolbar>    
        </ion-header>
        <ion-content>              
            <ion-fab vertical="center" horizontal="center" slot="fixed">
                <ion-fab-button @click="takePhoto">
                  <ion-icon :icon="cameraOutline" size="large"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, useIonRouter, loadingController  } from "@ionic/vue";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { cameraOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default {
  props: {
    timeout: { type: Number, default: 1000 },
  },
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
      const router = useRouter();
      const ionRouter = useIonRouter();
      //const { takePhoto } = usePhotoGallery();
      return {
        cameraOutline,
        router,
        ionRouter
        //takePhoto
    }
  },
  methods: {
    async takePhoto() {   
      const image = await Camera.getPhoto({
        quality: 50,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      })

      var form = new FormData();
      var base64 = await fetch(image.dataUrl);
      var blob = await base64.blob();

      const loading = await loadingController
        .create({
          cssClass: 'loader',
          message: this.getRandomSentence(),
        });

      await loading.present();
      // await new Promise(resolve => setTimeout(resolve, 4000));
      // loading.dismiss();

      form.append('image', blob);

      await fetch("https://bolis-api.azurewebsites.net/compare2", {
      "method": "POST",
      "headers": {},
      "body": form
      })
      .then(response => {
        loading.dismiss(); 
        if(response.ok) {
            return response.json();   
        } else{
          alert("Server returned " + response.status + " : " + response.statusText);
        }                
      })
      .then(data => {
        console.log("data:", data);
        this.$store.commit('addWineList', data);
          return this.ionRouter.push({
                name: 'wines',           
                params: {
                  id: data.id
              }
          });
      })
      .catch(err => {
        loading.dismiss();
        alert(err.stack);
        alert(err.message);
      });
    },
    handleClick: function() {
      return this.takePhoto(); 
    },
     getRandomSentence() {
      var sentences = [
        "Nice... Barolo",
        "Zinfandel, no thanks :)",
        "Champagne > Prosecco"
      ]
      var item = sentences[Math.floor(Math.random() * sentences.length)];

      return item;
    },

    async presentLoading() {
      const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: this.getRandomSentence()//'Nice... Barolo',
        });
        
      await loading.present();     
    },
  }
}
</script>

<style scoped>
.loader {
  --background: #222;
  --spinner-color: #fff;
  color: #fff;
}

.version-text {
  color: var(--ion-color-secondary-shade);
  font-size: 0.7rem;
}

ion-title {
  color: var(--ion-color-primary);
  font-size: 1.6rem;
}
</style>