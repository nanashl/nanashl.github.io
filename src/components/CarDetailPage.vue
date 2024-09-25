<template>
    <div class="car-detail-page">
      <div class="car-detail-container">
        <img :src="car.image" :alt="car.name" class="car-image-detail" />
        <div class="car-info">
          <h2>{{ car.name }}</h2>
          <p class="price">{{ car.price }} ₽</p>
          <p class="description">{{ car.description }}</p>
          <router-link to="/catalog" class="back-button">Назад к каталогу</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        car: null,
      };
    },
    created() {
      const carId = this.$route.params.id;
      const cars = [
        { id: 1, name: 'Автомобиль 1', price: '1 200 000', image: '/assets/cars/car1.jpg', description: 'Описание автомобиля 1' },
        { id: 2, name: 'Автомобиль 2', price: '1 500 000', image: '/assets/cars/car2.jpg', description: 'Описание автомобиля 2' },
        { id: 3, name: 'Автомобиль 3', price: '1 800 000', image: '/assets/cars/car3.jpg', description: 'Описание автомобиля 3' },
      ];
      this.car = cars.find(car => car.id == carId);
    },
  };
  </script>
  
  <style scoped>
  .car-detail-page {
    padding: 50px;
    text-align: center;
  }
  
  .car-detail-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .car-image-detail {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .car-info {
    max-width: 400px;
    text-align: left;
  }
  
  .car-info h2 {
    font-size: 32px;
    color: #ff7e5f;
    margin-bottom: 20px;
  }
  
  .car-info .price {
    font-size: 24px;
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  .car-info .description {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
  }
  
  .back-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ff7e5f;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s ease;
  }
  
  .back-button:hover {
    background-color: #feb47b;
  }
  </style>