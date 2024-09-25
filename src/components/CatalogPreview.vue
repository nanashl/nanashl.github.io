<template>
  <div class="catalog-preview-h1">
    <h1>Наши автомобили</h1>
  </div>
  <div class="catalog-preview">
    
    <div class="catalog-grid">
      <div class="catalog-item" v-for="car in cars" :key="car.id">
        <img :src="car.image" :alt="car.name" class="car-image" />
        <h3>{{ car.name }}</h3>
        <p class="price">{{ car.price }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [
        {
          id: 1,
          name: 'Volkswagen Multivan MArko Polo',
          price: '6 200 000',
          image: '/assets/VW_markoPolo/VW_main.jpg', 
        },
        {
          id: 2,
          name: 'Toyota Land Cruiser Prado',
          price: '15 500 000',
          image: '/assets/TLandCruiser/T_LandCruiser.jpg',
        },
        {
          id: 3,
          name: 'BMW 730d xDrive',
          price: '10 800 000',
          image: '/assets/bmw730d/BMW-730d.jpg',
        },
      ],
    };
  },
};

</script>

<style scoped>
.catalog-preview-h1 h1{
  left: 10;
}
.catalog-preview {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px; /* Отступ снизу */
  border-bottom: 2px solid rgba(255, 255, 255, 0.2); /* Разделительная линия */
  padding-bottom: 20px;
}

.catalog-preview h2 {
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 30px;
}

.catalog-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.catalog-item {
  width: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.catalog-item:hover {
  transform: translateY(-5px);
}

.car-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.catalog-item h3 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #2c3e50;
}

.price {
  font-size: 18px;
  color: #666;
}
</style>
