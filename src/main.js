import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импорт маршрутизатора
import 'leaflet/dist/leaflet.css';


//import './assets/styles.css'; // Импорт CSS-стилей (опционально)

const app = createApp(App);

app.use(router); // Используем Vue Router для маршрутизации

app.mount('#app'); // Монтируем приложение к элементу с id="app"