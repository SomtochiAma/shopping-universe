<template>
  <div id="app">
    <div id="nav">
      <p>Shopping Universe</p>
      <div id="right-nav">
        <router-link to="/signup">SignUp</router-link>
        <router-link to="/login">Login</router-link> 
        <router-link to="/home">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link> 
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  background-color: gold
}

#nav #right-nav {
  display: flex;
  
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
