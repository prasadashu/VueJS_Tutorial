<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" v-bind:disabled="isPlaying">Play</button>
  
  <!--Data received from 'Block' Component-->
  <!--The data is identified using 'end' and contains the value of 'reactionTime'-->
  <!--The 'end' is mapped to 'endGame' method which takes 'reactionTime' as an argument-->
  <Block v-if="isPlaying" v-bind:delay="delay" @end="endGame" />

  <!--The 'score' variable is sent to Results component using 'bind'-->
  <Results v-if="showResults" v-bind:score="score" />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  data(){
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  components: {
    Block,
    Results
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime){
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
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
  color: #444;
  margin-top: 60px;
}

button{
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 10px;
  cursor: pointer;
  margin: 10px;
}

button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
