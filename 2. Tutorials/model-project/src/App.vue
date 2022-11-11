<template>
  <!--Adding elements to the html page-->
  <h1>{{ title }}</h1>

  <!--Adding conditional div tag to toggle component display-->
  <!--Replaced div tag with teleport-->
  <teleport to=".modals" v-if="showModal">
    <!--Adding the Vue component imported-->
    <!--Passing dynamic values to components using 'props'-->
    <!--A better way is to bind the 'props' with the 'data()'-->
    <!--Ensure to put a space before '/>' at the end-->
    <!--Listening to emitted events using '@some_event_name' from the parent-->
    <Modal header="Sign up for Giveaway!" 
          text="Grab your swag at half the price" 
          :data1="data1" 
          :data2="data2"
          theme="sale"
          @some_closing_event="toggleModal" >

          <!--Passing elements to slot-->
          <h1>This is a slot header 1</h1>
          <p>This is a slot paragraph</p>

          <!--Passing hyperlinks using nameslots-->
          <!--Naming our slot as 'links'-->
          <template v-slot:links>
            <a href="#">Sign Up Now!</a>
            <a href="#">More Infor</a>
          </template>
    </Modal>
  </teleport>

  <!--Adding ModalTwo div-->
  <div v-if="showModalTwo">
    <ModalTwo theme="fff"
              @some_modal_two_closing_event="toggleModalTwo">
      <!--Passing slot elements-->
      <h1>This is Slot Two header</h1>
      <p>This is a paragraph of Slot Two tag</p>
    </ModalTwo>
  </div>

  <!--Adding a div tag to put the button in the next line-->
  <p>Welcome...</p>

  <!--Adding a component toggle button-->
  <!--Adding special click to respond when 'alt' is also pressed-->
  <button @click.alt="toggleModal">Show Modal (alt)</button>

  <!--Adding paragrapg tag to separate buttons-->
  <p>Paragraph tag to separate buttons</p>

  <!--Adding button to toggle Modal Two-->
  <button @click.alt="toggleModalTwo">Show Modal Two (alt)</button>

  <!--Adding another 'p' tag to separate button and input field-->
  <p>'p' tag to separate button with input tag</p>

  <!--Creating a reference to the input tag-->
  <!--Linking a button a function 'handleClick'-->
  <input type="text" ref="name">
  <button @click="handleClick">Click Me</button>
</template>

<script>
// Import 'Modal' Vue component
import Modal from './components/Modal.vue'
import ModalTwo from './components/ModalTwo.vue'

export default {
  name: 'App',
  // Adding Vue components
  components: {
    Modal,
    ModalTwo
  },
  // Adding data to be referenced in the file
  data(){
    // Add data to be referenced is returned in the title
    return {
      title: 'My First Vue App',
      data1: 'Some data 1',
      data2: 'Some data 2',
      showModal: false,
      showModalTwo: false
    }
  },
  // Adding methods to the file
  methods: {
    // Defining a method linked to the 'Click Me' button
    handleClick(){
      /*Define a method to get referenced element from html page*/

      // Print the tag which has been referenced
      console.log(this.$refs.name);
      
      // Add class name to 'input' tag on button click
      this.$refs.name.classList.add('active');

      // Add focus to the 'input' tag on button click
      // Places the cursor in the input tag
      this.$refs.name.focus();
    },

    // Defining method to toggle modal
    toggleModal(){
      this.showModal = !this.showModal
    },

    // Define method to toggle Modal Two
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
