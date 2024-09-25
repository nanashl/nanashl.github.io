<template>
  <div class="price-page">
    <Header />
    <h1>Прайс-лист на услуги</h1>
    <table class="price-table">
      <thead>
        <tr>
          <th>Услуга</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in services" :key="service.id">
          <td>{{ service.name }}</td>
          <td>{{ service.price }}</td>
        </tr>
      </tbody>
    </table>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { id: 1, name: 'Замена масла в двигателе', price: '3 000 руб.' },
        { id: 2, name: 'Замена масла в коробке передач', price: '4 500 руб.' },
        { id: 3, name: 'Замена воздушного фильтра', price: '1 200 руб.' },
      ],
    };
  },
};
</script>

<style scoped>
.price-page {
  text-align: center;
  padding: 20px;
  color: #2c3e50;
}

.price-page h1 {
  font-size: 32px;
  color: #ff7e5f;
  margin-bottom: 20px;
}

.price-table {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-collapse: collapse;
}

.price-table th,
.price-table td {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
}

.price-table th {
  background-color: #ff7e5f;
  color: white;
  font-size: 18px;
}

.price-table td {
  background-color: white;
  font-size: 16px;
}

.price-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.price-table tr:hover {
  background-color: #f1f1f1;
  transition: background-color 0.3s ease;
}
</style>