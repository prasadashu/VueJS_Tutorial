<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        Click Me
    </div>
</template>

<script>
// Everything needs to be contained within 'export default'
export default{
    props: ['delay'],

    // Declare the data
    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },

    // Declare the methods
    methods:{
        startTimer(){
            // Referencing the 'timer' variable using 'this' keyword
            this.timer = setInterval(() => {
                // Referencing the 'reactionTime' variable using 'this' keyword
                this.reactionTime += 10
            }, 10)
        },
        stopTimer(){
            // Clear the value of the variable 'timer'
            clearInterval(this.timer);
            // Referencing the 'reactionTime' variable using the 'this' keyword
            console.log(this.reactionTime);
            
            // Send data back to 'App.vue' using the 'emit' keyword
            // Data gets emitted back to 'App.vue'
            // The varaible 'reactionTime' gets sent back to 'App.vue'
            // The data sent back to 'App.vue' will be identified using 'end'
            this.$emit('end', this.reactionTime);
        }
    },

    // Declaring Hooks
    // Fires when the component is mounted
    mounted(){
        console.log('Component Mounted')
        setTimeout(() => {
            // Referencing the 'showBlock' variable using the 'this' keyword
            this.showBlock = true;
            // Referencing the 'startTimer' variable using the 'this' keyword
            this.startTimer();
            // Referencing the 'delay' variable using the 'this' keyword
            console.log(this.delay);
        }, this.delay)
    },

    // Fires when component is updated
    updated(){
        console.log("Component Updated")
    },

    // Fires when component is unmounted
    unmounted(){
        console.log("Component Unmounted")
    }
}
</script>

<style>
    .block{
        widows: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>