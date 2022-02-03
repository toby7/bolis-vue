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
    };
  
    return {
      takePhoto,
    };
  }