<template>
    <div id="box">
        <form @submit.prevent="signupUser()">
            <p v-if="error">{{error}}</p>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="email">
            <label for="usw=ername">Username:</label>
            <input type="text" name="username" id="username" v-model="username">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="password">
            <button>Sign In</button>
        </form>
    </div>
</template>

<script>
import user from '../api/users';

export default {
    name: 'Signup',
    data() {
        return {
            username: "",
            email: "",
            password: "",
            error: null
        }
    },

    methods: {
        signupUser() {
            const data = {
                email: this.email,
                password: this.password,
                username: this.username
            }
            const returnObj = user.postUser(data);
            this.error = returnObj.msg;
            if(returnObj.bool) {
                console.log("Dashboard!!")
            }
            
        }
    },
}
</script>

<style scoped>

div#box{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
}

form {
    background: white;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 40px;
    
}

input {
    width: 80%;
    padding: 5px;
}

button {
    margin-top: 10px; 
    padding: 5px 10px;
    width: 70px;
    color: white;
    background-color: gold;
    border: 1px solid gold;
}

</style>
