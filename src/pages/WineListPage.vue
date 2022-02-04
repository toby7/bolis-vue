<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Viner</ion-title>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/upload"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>    
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>test1</ion-item>
                <ion-item>test2</ion-item>
                <ion-item>test3</ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonList, IonItem } from "@ionic/vue";

export default {
components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem
    },

props: ['items'],

mounted() {
   //alert(JSON.stringify(this.items));
   console.log(JSON.stringify(this.items));
   console.log(this.items);
 }
}
</script>