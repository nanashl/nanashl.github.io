<template>
  <div class="catalog-page">
    <section class="catalog-section">
      <h1>Каталог автомобилей</h1>
      <div class="catalog-grid">
        <div class="catalog-item" v-for="car in cars" :key="car.id">
          <img :src="car.image" :alt="car.name" class="catalog-image" />
          <h3>{{ car.name }}</h3>
          <p>{{ car.description }}</p>
          <router-link :to="'/catalog/' + car.id" class="cta-button">Подробнее</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cars: [
        { id: 1, name: 'Автомобиль 1', description: 'Описание 1', image: ('/assets/VW_markoPolo/VW_main.jpg') },
        { id: 2, name: 'Автомобиль 2', description: 'Описание 2', image: ('/assets/bmw730d/BMW-730d.jpg') },
        { id: 3, name: 'Автомобиль 3', description: 'Описание 3', image: ('/assets/TLandCruiser/T_LandCruiser.jpg') },
      ],
    };
  },
};
</script>

<style scoped>
.catalog-page {
  padding: 20px;
  background-color: #f5f5f5;
  color: #2c3e50;
}

/* Секция каталога */
.catalog-section {
  text-align: center;
  margin-top: 20px;
}

.catalog-section h1 {
  font-size: 36px;
  margin-bottom: 30px;
  color: #ff7e5f;
}

/* Сетка каталога */
.catalog-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.catalog-item {
  width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.catalog-item:hover {
  transform: translateY(-10px);
}

.catalog-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.catalog-item h3 {
  font-size: 20px;
  color: #333;
}

.catalog-item p {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

/* Кнопка CTA */
.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff7e5f;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #feb47b;
}
</style>