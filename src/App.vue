<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.blueButton {
    border-radius: 50px;
    border: 0px;
    padding-right: 15px;
    margin-left: 15px;
    margin-top: 5px;
    color: white;
    background-color: rgb(7,153,226);
    position: relative;
}

.blueButton.pill {
    height: 40px; 
    min-width: 100px;
}

.shadowed {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.shadowed:active {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4), 0 3px 10px 0 rgba(0,0,0,0.38);
    transform: translateY(2px);
}

button {
    outline: none !important;
}

</style>
