import { createRouter, createWebHistory } from '@ionic/vue-router';
import UploadImagePage from '../pages/UploadImagePage.vue';
import WineListPage from '../pages/WineListPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/upload'
  },
  {
    path: '/upload',
    component: UploadImagePage
  },
  {
    path: '/wines/:id',
    name: 'wines',
    component: WineListPage,
    //props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router