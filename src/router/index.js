import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import CatalogPage from '@/views/CatalogPage.vue';
import PricePage from '@/views/PricePage.vue';
import CarDetailPage from '@/components/CarDetailPage.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/catalog', component: CatalogPage },
  { path: '/price', component: PricePage },
  { path: '/car/:id', name: 'CarDetail', component: CarDetailPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;