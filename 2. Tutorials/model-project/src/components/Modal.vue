<template>
    <!--Providing dynamic class in addition to static class-->
    <!--Added custom click to only react if clicked on class 'backdrop'-->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>Modal Title</h1>
            <h2>{{ header }}</h2>
            <h3>{{ text }}</h3>
            <h3>{{ data1 }}</h3>
            <h3>{{ data2 }}</h3>
            <p>Modal Content</p>

            <!--Declare the slot to contain the passed elements-->
            <!--Passing default content to display in case nothing is passed to slot-->
            <slot>Default Content</slot>

            <!--Create a div to contain the name slots-->
            <div class="actions">
                <!--The 'name' attribute searches for slots with name of links-->
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    // Registering 'props' to Modal component
    props: ['header', 'text', 'data1', 'data2', 'theme'],
    // Defining events to be emitted by the component to parent
    methods: {
        closeModal(){
            this.$emit('some_closing_event')
        }
    }
}
</script>

<!--Scoping the style to a component using the below-->
<!--<style scoped>-->
<!--Can impact the performance-->
<!--Or place the class name within which h1 tag lies-->
<style>
    .modal{
        width: 400px;
        padding: 100px auto;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1{
        color: #03cfb4;
        border: none;
        padding: 0;
    }
    .modal p{
        font-style: normal;
    }
    .modal .actions{
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .modal .actions a{
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin-top: 10px;
    }
    .modal.sale{
        background: crimson;
        color: white;
    }
    .modal.sale h1{
        color: white;
    }
    .modal.sale .actions{
        color: white;
    }
    .modal.sale .actions a{
        color: white;
    }
</style>