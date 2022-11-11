import { ref } from 'vue'

// Pass the 'id' as a parameter to the function
const getPost = (id) => {
    // Declare the variables as NULL
    const post = ref(null);
    const error = ref(null);

    // Call the async function
    const load = async() => {
        try{
            // Call the API to get post 'id' related data
            let data = await fetch('http://localhost:3000/posts/' + id);

            // Throw error if response is not 200
            // Exit 'try' block to go to 'catch' block
            if(!data.ok){
                throw Error('This post does not exist');
            }
            // Get post data if response is 200
            post.value = await data.json();
        }
        catch(err){
            // Get the error message in error object
            error.value = err.message;
            // Print the error message on console
            console.log(err.value);
        }
    }

    // Return below data from 'getPost' method
    return { post, error, load }
}

// Export the method to be used when imported
export default getPost;