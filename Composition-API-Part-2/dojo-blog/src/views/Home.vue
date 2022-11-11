<template>
  <div class="home">
    <h1>Home</h1>
    <!--Add conditional to toggle posts and bind 'PostList' Component to 'posts'-->
    <PostList v-if="showPosts" v-bind:posts="posts" />
    
    <!--Add button to toggle posts-->
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    
    <!--Add button to delete a post-->
    <!--This updates the Component-->
    <button @click="posts.pop()">Delete last post</button>

    <!--Check if there is an error-->
    <div v-if="error_json">{{ error_json }}</div>

    <!--Adding conditional to component to display if 'posts_json' contains data-->
    <!--Use binding to send data to PostsList component-->
    <div v-if="posts_json.length">
      <PostList v-bind:posts_json="posts_json" />
    </div>
    <div v-else>
      <p>No data in JSON Server</p>
    </div>


    <button @click="posts_json.pop()">Delete JSON last post</button>
  </div>
</template>

<script>
// Import component PostsList
import PostList from '../components/PostsList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  // Register the component
  components: { PostList },
  setup() {
    // Call the Composable function
    // Get the values returned
    const { posts, showPosts, load, posts_json, error_json} = getPosts();

    // Invoke the load method
    load();

    // Return the Reference Object
    // Return variable to show/hide posts
    // Return JSON reference objects
    return{
      posts,
      showPosts,
      posts_json,
      error_json
    }
  }
}
</script>
