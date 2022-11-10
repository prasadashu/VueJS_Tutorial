<template>
    <h1>Job Details Page</h1>
    <!--Here we use 'id' because we have this "path: '/jobs/:id'" in index.js-->
    <p>The Job ID is {{ id }}</p>

    <!--Accessing 'job.title' when the 'job' variable is set to null will throw an error-->
    <!--We will enclose the job details in a div-->
    <!--A condition will be applied to div to only display if the condition is met-->
    <div v-if="job">
        <h2>{{ job.title }}</h2>
        <p>This job is of {{ id }}</p>
        <p>The job is {{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading Job Details</p>
    </div>
</template>

<script>
export default{
    // We can use either the 'props' or the 'id' in 'data' for routing
    // Having both will throw a warning
    // Both have been kept for the purpose of demonstration
    props: ['id'],
    data(){
        return{
            id: this.$route.params.id,
            job: null
        }
    },
    
    // Declaring the 'mounted' hook to fetch data
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id)
          .then(res => res.json())
          .then(data => this.job = data)
          .catch(err => console.log(err.message))
    }
}
</script>

<style></style>