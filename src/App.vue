<template>
  <div id="app">
    <img src="/assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
