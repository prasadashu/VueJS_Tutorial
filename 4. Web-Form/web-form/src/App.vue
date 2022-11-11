<template>
  <!--Add the Component to the template-->
  <SignupForm />
</template>

<script>
// Import the Component
import SignupForm from './components/SingupForm.vue'

export default {
  name: 'App',
  
  // Add the Component
  components: {
    SignupForm
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
  margin-top: 60px;
}

body{
  margin: 0;
  background: #eee;
}
</style>
