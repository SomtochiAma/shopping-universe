<template>
    <div>
        <div class="item-box">
            <div class="item" v-for="item in items" :key="item.id">
                <img src="../assets/logo.png"/>
                <div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                    <p>Price: {{item.price}}</p>
                    <p>Quantity: {{item.quantity}}</p>
                    <button @click="addToCart(item)">Add to Cart</button>
                </div>
            </div>
        </div>

        <div>
            <h1>Your cart</h1>
            <div  class="cart" v-for="cartItem in cart" :key="cartItem.id">
                <img src="../assets/logo.png"/>
                <div>
                    <h3>{{cartItem.title}}</h3>
                    <p>{{cartItem.desc}}</p>
                    <p>Price: {{cartItem.price}}</p>
                    <p>Quantity: {{cartItem.quantity}}</p>
                    <button @click="deleteCart(cartItem.id)">Remove</button>
                </div>
            </div>
            <h1>{{ total }}</h1>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState([
        'items',
        'cart'
        ]),

        ...mapGetters([
            'total'
        ])
    },

    methods: {
        ...mapMutations([
            'getItems',
            'getCart',
            'deleteCart', 
            'addToCart'
        ])
    },

    mounted() {
        this.getItems();
        this.getCart()
    }
}
</script>

<style scoped>

.item-box {
    display: flex;
    flex-wrap: wrap;
}

.cart {
    background-color: white;
    margin: 10px;
    display: flex
}

.item {
    width: 45%;
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


</style>
