<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <!--Define method to navigate-->
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="backTwo">Go Back Two</button>
  <button @click="forward">Go Forward</button>

  <router-view/>
</template>

<script>
export default{
  methods:{
    // Define method to redirect user
    redirect(){
      this.$router.push({name: 'home'})
    },
    
    // Define method to go back
    back(){
      // NOTE: Earlier we used '$route' to get the info about the URL
      // This time we are using 'router'
      // Here '-1' makes us go back one page
      this.$router.go(-1);
    },

    // Define method to go back two pages
    backTwo(){
      // Here '-2' makes us go back two pages
      this.$router.go(-2);
    },

    // Define method to go forward
    forward(){
      // Here we will go forward one page
      this.$router.go(1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}

button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
