<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale' }">

            <!--Declare the slot to contain the passed elements-->
            <!--Passing default content to display in case nothing is passed to slot-->
            <slot>Default Content</slot>
        </div>
    </div>
</template>

<script>
    export default{
        methods:{
            closeModal(){
                this.$emit('some_modal_two_closing_event')
            }
        }
    }
</script>

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
    .modal.sale{
        background: crimson;
        color: white;
    }
    .modal.sale h1{
        color: white;
    }
</style>