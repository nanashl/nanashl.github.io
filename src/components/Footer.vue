<template>
  <footer>
    <div class="footer-content">
      <div class="footer-info">
        <h2>Контакты</h2>
        <p>Телефон: +7 (999) 705-54-79</p>
        <p>Адрес: Брянск</p>
      </div>

      <div class="footer-map">
        <h2>Мы на карте</h2>
        <div id="map"></div> 
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 LuxAuto</p>
      <p>Все права защищены</p>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    this.loadYandexMapsScript().then(() => {
      this.initYandexMap();
    }).catch(() => {
      console.error('Ошибка при загрузке Yandex Maps API');
    });
  },
  methods: {
    loadYandexMapsScript() {
      return new Promise((resolve, reject) => {
        if (typeof ymaps !== 'undefined') {
          resolve(); // Скрипт уже загружен
        } else {
          const script = document.createElement('script');
          script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
          script.async = true;
          script.onload = resolve;  
          script.onerror = reject;  
          document.head.appendChild(script); // Добавляем скрипт на страницу
        }
      });
    },
    initYandexMap() {
      ymaps.ready(() => {
        const map = new ymaps.Map("map", {
          center: [53.2521, 34.3717], // Координаты Брянска
          zoom: 10,
        });

        const placemark = new ymaps.Placemark([53.2521, 34.3717], {
          hintContent: 'LuxAuto',
          balloonContent: 'Мы здесь',
        });

        map.geoObjects.add(placemark);
      });
    }
  }
};
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, #feb47b, #ff7e5f);
  padding: 40px 20px;
  color: white;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.footer-info, .footer-map {
  width: 45%;
  margin-bottom: 20px;
}

.footer-info h2, .footer-map h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.footer-info p, .footer-map p {
  font-size: 16px;
}

#map {
  width: 100%;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3); /* Для стиля карты можно использовать полупрозрачный фон */
  border-radius: 10px;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2); /* Легкая граница для разделения */
}

.footer-bottom p {
  font-size: 14px;
  margin: 0;
}
</style>
