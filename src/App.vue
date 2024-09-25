<template>
  <div id="app">
    <!-- Хедер будет отображаться на всех страницах -->
    <Header />

    <!-- Основное содержимое, которое зависит от маршрута -->
    <main>
      <router-view />
    </main>

    <!-- Футер будет отображаться на всех страницах -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';  // Импортируем хедер
import Footer from '@/components/Footer.vue';  // Импортируем футер

export default {
  name: 'App',
  components: {
    Header, // Регистрируем компонент хедера
    Footer  // Регистрируем компонент футера
  }
};
</script>

<style>
/* Основные стили для всего приложения */
#app {
  background-color: white;
}

h1 {
  font-weight: 300;
  font-size: 1.8em;
  margin-top: 0;
}

main {
  min-height: 80vh; /* Основное содержимое будет занимать минимум 80% высоты экрана */
}
</style>