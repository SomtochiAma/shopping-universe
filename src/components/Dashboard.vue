<template>
    <div>
        <div class="item" v-for="item in items" :key="item.id">
            <img src="../assets/logo.png"/>
            <div class="info">
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
                <p>Price: {{item.price}}</p>
                <p>Quantity: {{item.quantity}}</p>
                <div class="button-box">
                    <button @click="deleteItem(item.id)">Delete</button>
                    <button @click="update(item.id)">Update</button>
                </div>
            </div>
        </div>
        <button id="create" @click="showForm = true"> Create a new Item</button>
        <form v-if="showForm" @submit.prevent="createNewItem()">
            <input type="text" name="title" id="title" v-model="title" required>
            <input type="text" name="desc" id="desc" v-model="desc" required>
            <input type="number" name="price" id="price" v-model="price" required>
            <input type="number" name="quantity" id="quantity" v-model="quantity" required>
            <button >Create Item</button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {

    data() {
        return {
            title: "",
            desc: "",
            price: null,
            quantity: null,
            showForm: false
        }
    },

    computed: mapState([
        'items',
        'id'
    ]),
    

    methods: {
        ...mapMutations([
            'getItems',
            'deleteItem',
            'addItem',
            'incrementId'
        ]),

        createNewItem() {
            const productDetails = {
                id: this.id,
                title: this.title,
                price: this.price,
                quantity: this.quantity,
                desc: this.quantity
            }
            this.addItem(productDetails);
            this.incrementId();
            this.showForm = false
        },

        update(routeId) {
            this.$router.push(`update/${routeId}`)
        }

    },

    mounted() {
        this.getItems();
        // this.incrementId();
        console.log(this.id, this.items)
    }
}
</script>

<style>

.item {
    background-color: white;
    margin: 10px;
    display: flex;
}

img {
    margin-right: 10px;
    width: 150px;
    height: 150px;
}

button {
    margin: 7px;
    padding: 5px 10px;
    color: white;
    background-color: gold;
    border: 1px solid gold;
}

h3 {
    margin: 7px;
}

p {
    margin: 5px
}

#create {
    background: white;
    margin-left: 7px;
    color: gray;
}


</style>
