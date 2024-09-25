<template>
  <div class="homepage">
    <section class="hero-section">
      <div class="hero-content">
        <h1>LuxAuto — Ваш надежный выбор</h1>
        <p>Добро пожаловать на наш сайт! Мы предлагаем широкий выбор автомобилей по доступным ценам.</p>
        <router-link to="/catalog" class="cta-button">Посмотреть каталог</router-link>
      </div>
      
      <!-- Слайдер изображений -->
      <div class="hero-image">
        <img :src="currentImage" :alt="`Изображение автомобиля ${currentIndex + 1}`" />
      </div>
    </section>

    <!-- Превью каталога -->
    <section class="catalog-preview">
      <h2> </h2>
      <div class="hero-content">
      </div>
      <CatalogPreview />
    </section>
  </div>
</template>



<script>
import CatalogPreview from "@/components/CatalogPreview.vue";

import firstImage from "@/assets/home_collection/first.jpg";
import secondImage from "@/assets/home_collection/second.jpg";
import thirdImage from "@/assets/home_collection/third.jpg";
import fourthImage from "@/assets/home_collection/four.jpg";

export default {
  components: {
    CatalogPreview,
  },
  data() {
  return {
    images: [firstImage, secondImage, thirdImage, fourthImage],
    currentIndex: 0, // Индекс текущего изображения
  };
},
  computed: {
    currentImage() {
      return this.images[this.currentIndex]; // Возвращаем текущее изображение
    },
  },
  mounted() {
    // Запускаем таймер, который каждые 5 секунд будет переключать изображения
    this.startImageRotation();
  },
  methods: {
    startImageRotation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length; // Циклически переключаем индекс
      }, 5000); // Интервал 5000 мс = 5 секунд
    },
  },
};
</script>

<style scoped>
/* Главная страница */
.homepage {
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.catalog-preview{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  align-items: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 50px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  margin-bottom: 40px; /* Отступ снизу */
  border-bottom: 2px solid rgba(255, 255, 255, 0.2); /* Разделительная линия */
  padding-bottom: 20px;
  
}
.catalog-card {
  flex: 1; /* Карточки растягиваются равномерно */
  margin: 10px;
  min-width: 300px; /* Минимальная ширина каждой карточки */
}

.catalog-preview h2{
  font-size: 36px;
  margin-bottom: 20px;
  position: absolute;
  left: 10;
  
}
/* Hero Section: Приветственная секция */
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 50px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  position: relative; /* Это нужно для того, чтобы .hero-image была абсолютной относительно секции */
  min-height: 300px; /* Задаем минимальную высоту секции */
  left: 0;
}

.hero-content {
  max-width: 50%;
  text-align: left;
}

.hero-content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 18px;
  margin-bottom: 30px;
}

.hero-image {
  position: absolute;
  right: 0;
  top: 50px;
  max-width: 45%;
  width: 400px; /* Фиксированная ширина */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out;
  margin-right: 10%;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out; /* Плавное появление/исчезновение изображения */
}

/* CTA button */
.cta-button {
  padding: 10px 20px;
  background-color: #fff;
  color: #ff7e5f;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* Превью каталога */
.catalog-preview {
  margin-top: 50px;
  text-align: center;
}

.catalog-preview h2 {
  font-size: 28px;
  margin-bottom: 30px;
}
</style>
