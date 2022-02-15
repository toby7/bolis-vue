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
                <ion-item 
                v-for="item in wines"
                :key="item.productNumber"
                :href="item.url">
                    {{item.name}},
                    {{item.vintage}},
                    <strong>{{item.price}} kr</strong>,
                    {{item.scores[0].score}}
                </ion-item>     
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

data() {
    return {
        id: this.$route.params.id
    };
},
// props: [
//     //'items',
//     'id'
// ],
// watch: {
//     '$route'(currentRoute) {}
// },

// mounted() {
// //    console.log("list stringify:", JSON.parse(JSON.stringify(this.items)));
// //    console.log("list plain:", this.items);
//  },
computed: {
      wines() {
          var data = this.$store.getters.wineLists(this.id);
          console.log('from vuex:', data)
          return data.wines;
      }
    }
 }
</script>