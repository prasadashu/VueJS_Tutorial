<template>
  <div class="home">
    <!--Calling variables returned from 'setup' function-->
    <h2>The first name is {{ first_name }} and last name is {{ last_name }}</h2>

    <!--Binding button with 'click'-->
    <button @click="handleClick">Click Me</button>

    <!--Paragraph tag being referenced from the 'setup' function-->
    <p ref="p_reference">This is a reference paragraph</p>

    <!--Calling the Reactive Variables-->
    <p>Reactive variable name is {{ some_name_reactive }} and Reactive variable profession is {{ some_profession_reactive }}</p>
    <p>Age is {{ some_age_reactive }}</p>

    <!--Creating an input tag and binding it with the Reference Variable-->
    <input type="text" v-model="some_name_reactive">

    <!--Creating a button to modify 'some_age_reactive' Reference Variable-->
    <button @click="some_age_reactive++">Increment Age</button>

    <!--Testing reactive-->
    <p>Reactive variable name is {{ some_name_using_reactive.name }} and Reactive variable age is {{ some_age_using_reactive.age }}</p>

    <!--Creating an input tag to be used as a filter-->
    <input type="text" v-model="search">
    <p>Search Term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>

    <!--Create a button to stop watching search box-->
    <button @click="stopWatching">Stop Watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
  name: 'HomeView',

  // Composition API
  // The 'setup' function will run before any other hook
  setup(){
    console.log('Setup');

    // Create a reference to a paragraph tag
    // The value of reference will be null as the reference hasn't been returned yet
    // Therefore, there is no association of the 'p' tag with the reference variable
    const p_reference = ref(null);
    console.log(p_reference);
    console.log(p_reference.value);

    // Declaring Reactive Variables
    // Using 'ref' to declare reference variables
    const some_name_reactive = ref("Arnab");
    const some_profession_reactive = ref("Blockchain Engineer");
    const some_age_reactive = ref(20);

    // Declaring variables in the 'setup' function
    let first_name = "Ashu";
    let last_name = "Prasad";

    // Using Reactive instead of React
    // Reactive requires objects in key-value pairs to be passed
    const some_name_using_reactive = reactive({ name: "Ashu_Reactive" });
    const some_age_using_reactive = reactive({ age: 20 });

    // Creating a Reference List
    const search = ref('')
    const names = ref(['mario', 'luigi', 'yori', 'mashu'])

    // Defining click handler function
    const handleClick = () => {
      console.log("You clicked me!");
      
      // This will print the 'p' tag
      console.log(p_reference.value);

      // Adding class to existing 'p' tag
      p_reference.value.classList.add('Test');

      // Modifying the content of the 'p' tag
      p_reference.value.textContent = "This is the modified text";

      // Attempt to modify the name variables
      first_name = "Ashu_1";
      some_name_reactive.value = "Arnab_1";

      // Updating 'Reactive' elements
      // The '.value' clause is not required
      some_name_using_reactive.name = "Ashu_Reactive_Modified";
      some_age_using_reactive.age++;
    }

    // Define a function to Compute Values
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    })

    // Hooks to 'watch' and 'watchEffect'
    // We want to 'watch' the 'search' Reference Variable
    // The 'watch' will fire the linked function everytime the 'search' Reference Value changes
    const stopWatch = watch(search, () => {
      console.log('Watch function run');
    })
    // We do not define what 'watchEffect' needs to monitor
    // Therefore, it will run only once
    // We can define what 'watchEffect' needs to monitor
    // This time, we will monitor 'search.value'
    const stopWatchEffect = watchEffect(() => {
      console.log('Watch Effect function run', search.value)
    })

    // Define stop watching function
    const stopWatching = () => {
      stopWatch();
      stopWatchEffect();
    }

    // Return the variables from the 'setup' function
    // Return the reference variable
    // Return reactive variables
    // Return computed variables
    // Return Stop Watching function
    return{
      first_name,
      last_name,
      handleClick,
      p_reference,
      some_name_reactive,
      some_profession_reactive,
      some_age_reactive,
      some_name_using_reactive,
      some_age_using_reactive,
      search,
      names,
      matchingNames,
      stopWatching
    }
  },

  // Creating a 'created' hook
  created(){
    console.log('Created');
  },

  // Creating a 'mounted' hook
  mounted(){
    console.log('Mounted');
  }
}
</script>
