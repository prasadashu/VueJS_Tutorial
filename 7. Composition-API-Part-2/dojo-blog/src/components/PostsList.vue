<template>
    <div class="post-list">
        <!--Call the accepted data from 'props'-->
        <!--Loop through the list of posts-->
        <div v-for="post in posts" v-bind:key="post.id">
            <!--Call the imported component and send post information-->
            <SinglePost v-bind:post="post" />
        </div>
        <hr />
        <div v-for="post_json in posts_json" v-bind:key="post_json.id">
            <!--Call the imported component and send post information-->
            <SinglePost v-bind:post="post_json" />
        </div>
    </div>
</template>

<script>
// Import the component
import SinglePost from './SinglePost.vue'
// Import the hooks
import { onMounted, onUnmounted, onUpdated } from 'vue';

export default {
    // Accept the data sent by 'Home.vue' as 'props'
    props: ['posts', 'posts_json'],
    // Register the component to be used
    components: {
        SinglePost
    },
    setup(props){
        // Returns 'props' as a proxy object
        console.log(props);

        // Call the hooks
        onMounted(() => console.log('Component Mounted'));
        onUnmounted(() => console.log('Component Unmounted'));
        onUpdated(() => console.log('Component Updated'));
    }
}
</script>

<style>
</style>