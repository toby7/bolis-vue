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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, useIonRouter, loadingController  } from "@ionic/vue";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { cameraOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

//import { useIonRouter } from '@ionic/vue';

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
    // return {
    //   cameraOutline
    // },
      const router = useRouter();
      const ionRouter = useIonRouter();
      return {
      cameraOutline,
      router,
      ionRouter
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
    var testa = await base64.blob();
    console.log(testa.size);

    const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          //duration: this.timeout,
        });
        
      await loading.present();
    //this.presentLoading();

      form.append('image', testa);
      fetch("https://localhost:7106/compare2", { 
      "method": "POST",
      "headers": {},
      "body": form
  })
  .then(response => { 
      if(response.ok){
        loading.dismiss();
        this.ionRouter.push('/wines'); 
          console.log(response.json()); 
      } else{
          alert("Server returned " + response.status + " : " + response.statusText);
      }                
  })
  // .then(response => {
  //     this.result = response.body;
      
  // })
  .catch(err => {
      console.log(err);
  });
    },

    handleClick: function(){
      return this.takePhoto(); 
    },

    submit () {
      navigator.mediaDevices.getUserMedia({
       video: true
     })
    },
    async presentLoading() {
      const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          //duration: this.timeout,
        });
        
      await loading.present();
      
      // setTimeout(function() {
      //   loading.dismiss()
      // }, this.timeout)
    }
  }
}
</script>

<style scoped>
.my-custom-class {
  --background: #222;
  --spinner-color: #fff;

  color: #fff;
}
</style>