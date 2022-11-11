<template>
    <div class="post">
        <router-link v-bind:to="{ name: 'Details', params: { id: post.id }}">
            <!--Call the accepted data as 'props'-->
            <!--Print the 'title' sub-data from 'post'-->
            <h3>{{ post.title }}</h3>
        </router-link>
        <!--Print the 'body' sub-data from 'post'-->
        <p>{{ snippet }}</p>
        <!--Print the tags-->
        <span v-for="tag in post.tags" v-bind:key="tag">
            #{{ tag }}
        </span>
    </div>
</template>

<script>
// Import the 'computed' property
import { computed } from 'vue'

export default{
    // Accept the input from 'PostsList.vue' as 'props'
    props: ['post'],
    // Pass the 'props' as a parameter to 'setup'
    setup(props){
        // Define a 'Computed' property to get substring of 'body' sub-data
        // We will be using the 'substring' method which will take 'Initial Positional of string' and 'Final Position of string' as arguments
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '...';
        })

        // Return the 'Computed' variable
        return{
            snippet
        }
    }
}
</script>

<style>
</style>