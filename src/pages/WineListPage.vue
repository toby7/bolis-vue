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
                <ion-item class="item ios item-fill-none" target="_blank"
                v-for="item in wines"
                :key="item.productNumber"
                :href="item.url">
                <ion-label class="ion-text-wrap">{{item.name}}, {{item.vintage}}</ion-label>
                    <ion-badge v-if="item.price != null" slot="end" color="success">
                        <div class="score">{{item.price}} kr</div>
                    </ion-badge>            
                    <ion-badge slot="end" color="danger">
                        <div class="score">{{item.scores[0].score}}/5</div>
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
    IonBadge,
    IonLabel 
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
    IonBadge,
    IonLabel
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
    --ion-margin: 4px;
}
.ion-padding-horizontal {
    --ion-padding: 6px;
}
.ion-margin-horizontal {
    --ion-margin: 4px;
}
.score {
    font-size: 1.2rem;
}
.voteCount {
    font-size: 0.7rem;
}
</style>