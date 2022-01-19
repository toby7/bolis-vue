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
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Buffer } from 'buffer';


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
    async takePhoto() {
      const image = await Camera.getPhoto({
        quality: 50,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      })
      //tester()
      
      console.log(image);
      console.log(image.dataUrl);
      console.log(image.webPath);
      //console.log(image.base64String);

      var form = new FormData();
      var decodedFile = Buffer.from(image.base64String, 'base64');
      //var test = new Blob(image.base64String);
       console.log(image.base64String);
      console.log(decodedFile);
    var base64 = await fetch(image.dataUrl);
    var testa = await base64.blob();
    console.log(testa.size);
      form.append('image', testa);//, '/C:/Temp/vinlista1.jpg');//, { filename: 'test.jpg' })
      fetch("https://localhost:7106/compare2", { //"https://localhost:44354/api/station/test"
      "method": "POST",
      "headers": {
           //"Content-Type": "multipart/form-data"
      },
      "body": form
  })
  .then(response => { 
      if(response.ok){
          return response.json()    
      } else{
          alert("Server returned " + response.status + " : " + response.statusText);
      }                
  })
  .then(response => {
      this.result = response.body; 
  })
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
  }
}
</script>