<template>
    <div>
        <form @submit.prevent="updateAnItem()">
            <input type="text" name="title" id="quantity" v-model="title">
            <input type="text" name="desc" id="desc" v-model="desc">
            <input type="number" name="price" id="price" v-model="price">
            <input type="number" name="quantity" id="quantity" v-model="quantity">
            <button>Update</button>
        </form>
    </div>
</template>

<script>
import items from '../api/items'
import { mapGetters } from 'vuex'
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            title: "",
            desc: "",
            quantity: 0,
            price: 0
        }
    },

    computed: {
        ...mapGetters([
            'particularItem'
        ])
    },

    methods: {
        ...mapMutations([
            'updateItem'
        ]),

        updateAnItem() {
            const id = this.$route.params.id;
            const updatedData = {
                title: this.title,
                price: this.price,
                quantity: this.quantity,
                desc: this.desc
            }

            this.updateItem(id, updatedData);
            this.$router.push('/dashboard')
        }      
    },

    created() {
        const id = this.$route.params.id;
        const particularItem = items.findItem(id)
        this.title = particularItem.title;
        this.price = particularItem.price;
        this.quantity = particularItem.quantity;
        this.desc = particularItem.desc;
    }
}
</script>

<style>

</style>
