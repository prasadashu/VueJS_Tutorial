<template>
    <!--Print error if variable 'error' is not NULL-->
    <div v-if="error">{{ error }}</div>
    <!--Print the post if variable 'post' is not NULL-->
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
</template>

<script>
// Import the 'Composable' function
import getPost from '../composables/getPost'

export default{
    // Accept the input to this 'view' in 'props'
    props: ['id'],
    
    // Pass the 'props' to get the 'id'
    setup(props){
        // Invoke the 'Composable' function
        // Get the output in the below variables
        const { post, error, load } = getPost(props.id);

        // Call the 'load' method
        load();

        // Return the variables to be used in 'templates'
        return{
            post,
            error
        }
    }
}
</script>

<style>
    .post{
        max-width: 1200px;
        margin: 0 auto;
    }
    .post p{
        color: #444;
        line-height: 1.5em;
        margin-top: 40px;
    }
    .pre{
        white-space: pre-wrap;
    }
</style>