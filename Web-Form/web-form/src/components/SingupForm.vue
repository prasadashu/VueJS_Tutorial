<template>
    <!--Create a form-->
    <!--We will skip the 'actions' as it will be taken care by Vue-->
    <!--'Prevent' action modifier prevents the page from being refreshed on submitting-->
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <!--Using the 'v-model' directive to capture the value in 'email' variable-->
        <input type="email" required v-model="email">

        <label>Password:</label>
        <!--Using the 'v-model' directive to capture the value in 'password' variable-->
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">Password must be at least 6 chars long</div>

        <label>Role:</label>
        <!--Using the 'v-model' directive to capture the value in 'role' variable-->
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <div class="terms">
            <!--Using the 'v-model' directive to capture the value in 'terms' variable-->
            <!--Checkboxes are inherently having a boolean functionality-->
            <input type="checkbox" v-model="terms" required>
            <label>Accept terms and conditions</label>
        </div>

        <!--Using the 'v-model' directive to capture the value in 'names' list-->
        <!--Checkboxes with the same 'v-model' data property is used as a list-->
        <div>
            <input type="checkbox" value="shaun" v-model="names">
            <label>Shaun</label>
        </div>
        <div>
            <input type="checkbox" value="yori" v-model="names">
            <label>Yori</label>
        </div>
        <div>
            <input type="checkbox" value="ashu" v-model="names">
            <label>Ashu</label>
        </div>

        <label>Skills:</label>
        <!--Using the 'v-model' directive to capture the value in 'tempSkill' variable-->
        <!--Adding 'keyup' directive to activate when a key is lifted after being pressed-->
        <!--Using the 'alt' event modifier to prevent the ',' getting inserted-->
        <!--Linking the directive to the 'addSkill' method-->
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <!--Loop through skills-->
        <!--Assign unique 'key' for each element-->
        <!--THE BELOW IMPLEMENTATION IS PREFERRED APPROACH-->
        <div v-for="skill in skills" v-bind:key="skill" class="pill" @click="deleteSkillAlternative(skill)">
            {{ skill }}
        </div>
        <!--Dummy div to test 'deleteSkill' method-->
        <div v-for="skill in skills" v-bind:key="skill" class="pill" @click="deleteSkill">
            {{ skill }}
        </div>

        <!--Default action of page on submitting is to refresh the page-->
        <div class="submit">
            <button>Create Account</button>
        </div>
    </form>

    <!--Output the values entered in the form-->
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms: {{ terms }}</p>
    <p>Names: {{ names }}</p>
</template>

<!--Two-Way data binding running-->
<!--Form input element data bound to data-->
<!--Data bound to Form input element-->

<script>
export default{
    data(){
        return{
            // The 'email' variable is updated when value is typed in form
            email: '',

            // The 'password' variable is updated when value is typed in form
            password: '',

            // The 'role' variable is updated when value is typed in form
            role: '',

            // The 'terms' variable is updated when value is typed in form
            terms: false,

            // The 'names' list is updated when value is typed in form
            names: [],

            // The 'tempSkill' variable is updated when value is typed in form
            tempSkill: '',
            // The 'skills' list is updated when value is pushed into it
            skills: [],

            // Boolena variable for password validation
            passwordError: false
        }
    },

    methods:{
        addSkill(event){
            // Check if the key lifted is ',' and if there is a string in 'tempSkill' variable
            if (event.key == ',' && this.tempSkill){
                
                // Check if string in 'tempSkill' variable is in 'skills' list
                if (!this.skills.includes(this.tempSkill)){
                    
                    // Push the skill to skills list
                    this.skills.push(this.tempSkill);
                    // Empty the 'tempSkill' variable
                    this.tempSkill = '';
                }
            }
        },

        // Define a method to delete a skill
        deleteSkill(event){
            /* Function to delete 'skill' from 'skills' list */
            // Print the skill captured
            console.log(event.target.innerHTML);
            // Get the index of the selected skill
            this.skillIndex = this.skills.indexOf(event.target.innerHTML);
            // Remove the skill from the list
            this.skills.splice(this.skillIndex, 1);
        },

        // Define an alternative method to delete a skill
        deleteSkillAlternative(skill){
            /* Function to delete a 'skill' from 'skills' list */
            // Print the skill captured
            console.log("Alternate Function capture: ", skill);
            // Check for the existence of the 'skill' in 'skills' array
            this.skills = this.skills.filter((item) => {
                return skill !== item;
            })
        },

        // Define function to handle submit event
        handleSubmit(){
            // Check if password entered follows the rules
            this.passwordError = this.password.length > 5 ?
             '': 'Password must be at least 6 chars long'

            // Output all the text if no errors
            if(!this.passwordError){
                console.log('Email: ', this.email);
                console.log('Password: ', this.password);
                console.log('Role: ', this.role);
                console.log('Skills: ', this.skills);
                console.log('Terms Accepted: ', this.terms);
            }
        }
    }
}
</script>

<style>
    form{
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    label{
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input, select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }

    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: realtive;
        top: 2px;
    }

    .pill{
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }

    button{
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }

    .submit{
        text-align: center;
    }

    .error{
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
</style>