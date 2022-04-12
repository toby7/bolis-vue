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
                    {{item.price}} kr
                    <ion-badge class="ion-margin-start" color="primary">
                        <div class="score">{{item.scores[0].score}}</div>
                        <span class="voteCount">{{item.scores[0].voteCount}}</span>
                        </ion-badge>
                </ion-item>     
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script>
import { 
    IonPage,
    IonHeader,
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButtons, 
    IonBackButton, 
    IonList, 
    IonItem,
    IonBadge 
    } from "@ionic/vue";

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
    IonItem,
    IonBadge
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

<style scoped>
.ion-margin-start {
    --ion-margin: 6px;
}
.score {
    font-size: 1.2rem;
}
.voteCount {
    font-size: 0.7rem;
}
</style>