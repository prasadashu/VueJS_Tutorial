<template>
    <div>
        <p>Reaction Time: {{ score }} ms</p>
        <p class="rank">{{ rank }}</p>
    </div>
</template>

<script>
export default{
    props: ['score'],

    // Define data
    data(){
        return{
            rank: null
        }
    },

    // Define some methods
    methods:{
        // Define a method to print score in console
        printScore(){
            console.log("The score is: ", this.score);
        }
    },

    // Fires when component is mounted
    mounted(){
        // Print component mounted message to console
        console.log("Results Component Mounted");

        // Call the 'printScore' method
        this.printScore();

        // Assign rank
        if (this.score < 250){
            this.rank = "Ninja Fingers";
        }
        else if (this.score < 400){
            this.rank = "Rapid Reflexes";
        }
        else{
            this.rank = "Snail Pace...";
        }

    },

    // Fires when component is unmounted
    unmounted(){
        console.log("Results Component Unmounted");
    }
}
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>