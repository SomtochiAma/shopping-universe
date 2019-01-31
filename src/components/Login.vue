<template>
    <div id="box">
        <form @submit.prevent="loginUser()">
            <p v-if="error">{{error}}</p>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" v-model="email">
            <label for="email">Password:</label>
            <input type="password" name="password" id="password" v-model="password">
            <button>Log In</button>
        </form>
    </div>
</template>

<script>
import user from '../api/users';

export default {
    name: 'Login',

    data() {
        return {
            email: "",
            password: "",
            error: null
        }
    },

    methods: {
        loginUser() {
            const data = {
                email: this.email,
                password: this.password
            }

            const returnObj = user.getUser(data);
            this.error = returnObj.msg;
            if(returnObj.bool) {
                localStorage.setItem("token", JSON.stringify(returnObj.token));
                this.$router.push('/dashboard');
                console.log("Dashboard!")
            }
        }
    }
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
