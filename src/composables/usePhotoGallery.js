//import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
//import { Filesystem, Directory } from '@capacitor/filesystem';
//import { Storage } from '@capacitor/storage';

export function usePhotoGallery() {
    const takePhoto = async () => {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });
      alert(photo);
        //     })
  //   var form = new FormData();
  //   var base64 = await fetch(image.dataUrl);
  //   var blob = await base64.blob();

  //   const loading = await loadingController
  //       .create({
  //         cssClass: 'my-custom-class',
  //         message: 'Nice... Barolo',
  //         //duration: this.timeout,
  //       });
        
  //     await loading.present();
  //   //this.presentLoading();

  //     form.append('image', blob);
  //     fetch("https://localhost:7106/compare2", { 
  //     "method": "POST",
  //     "headers": {},
  //     "body": form
  // })
  // .then(response => { 
  //     if(response.ok) {
  //       loading.dismiss();
  //       this.ionRouter.push('/wines/:data', { data: response.json() }); 
  //         //console.log(response.json()); 
  //     } else{
  //         alert("Server returned " + response.status + " : " + response.statusText);
  //     }                
  // })
  // .then(response => {
  //     this.result = response.body;  
  // })
  // .catch(err => {
  //   alert(err.stack);
  //   alert(err.message);
  // });
 
    };
  
    return {
      takePhoto,
    };
  }