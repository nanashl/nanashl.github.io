<template>
    <header>
      <div class="logo">
        <!-- Здесь можно вставить логотип -->
        <img src="@/assets/logo.svg" alt="Логотип компании" />
        
      </div>
      <div class="name">
        <h1>LuxAuto</h1>
      </div>
  
      <nav>
        <ul>
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about">О компании</router-link></li>
          <li><router-link to="/catalog">Каталог</router-link></li>
          <li><router-link to="/price">Прайс-лист</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Градиентный фон */
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .name h1{
    width: 150px;
    height: 40px;
    margin-right: 15px;
    font-size: 30px;
    margin: 0;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  
  .logo h1 {
    font-size: 24px;
    margin: 0;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    margin: 0 15px;
    padding: 10px 20px;
    background-color: rgba(248, 42, 42, 0.2); /* Полупрозрачный фон для ссылок */
    border-radius: 30px;
    transition: background-color 0.3s ease;
  }
  
  nav ul li:hover {
    background-color: rgba(255, 255, 255, 0.4); /* Изменение цвета при наведении */
  }
  
  nav ul li a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  
  nav ul li a.router-link-exact-active {
    background-color: rgba(255, 100, 100, 0.977); /* Активная ссылка */
    border-radius: 30px;
  }
  </style>
  