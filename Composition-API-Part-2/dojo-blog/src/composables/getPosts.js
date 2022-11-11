import { ref } from 'vue'

const getPosts = () => {
    // Define a Reference Object
    const posts = ref([
        { title: 'Welcome to the blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', id: 1},
        { title: 'Top 5 CSS tips', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', id: 2}
    ]);
  
    // Define a Reference Object to pull data from JSON Server
    const posts_json = ref([]);
    const error_json = ref(null);

    // Define variable to show/hide posts
    const showPosts = ref(true);

    // Define a async function to fetch data from JSON Server
    /* Toggle endpoint between 'posts' and 'post' */
    const load = async() => {
        try{
            let data = await fetch('http://localhost:3000/posts');
            // Print the response
            console.log(data);

            // If response wasn't good, we will throw an error
            if(!data.ok){
            // Throwing the error
            throw Error('No data available');
            }

            // Pass the JSON data to 'posts_json'
            posts_json.value = await data.json();
        }
        catch(err){
            // Error caught by the 'catch' block
            error_json.value = err.message;
            // Print the error
            console.log(error_json.value);
        }
    }

    // Return data
    return {
        posts,
        showPosts,
        load,
        posts_json,
        error_json
    }
}

// Export the Composable function
export default getPosts;