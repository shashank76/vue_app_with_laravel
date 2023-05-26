<template>
    <div>
        <h3 class="text-center">Edit Product</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateProduct">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="text" class="form-control" v-model="product.price">
                    </div>
                    <div class="form-group">
                        <label>Availability</label>
                        <input type="radio" id="true" value="1" v-model="product.availability" />
                        <label for="1">Yes</label>

                        <input type="radio" id="false" value="0" v-model="product.availability" />
                        <label for="0">No</label>
                    </div>
                    <div class="form-group">
                        <label>Size</label>
                        <input type="text" class="form-control" v-model="product.size">
                    </div>
                    <div class="form-group">
                        <label>Color</label>
                        <input type="text" class="form-control" v-model="product.color">
                    </div>
                    <div class="form-group">
                        <label>Stock</label>
                        <input type="text" class="form-control" v-model="product.stock">
                    </div>
                    <br>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Create</button>
                    </div>
                    <br>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                product: {}
            }
        },
        created() {
            axios.get(`/api/product/${this.$route.params.id}`)
                .then((res) => {
                    this.product = res.data;
                });
        },
        methods: {
            updateProduct() {
                axios.patch(`/api/product/${this.$route.params.id}`, this.product)
                    .then((res) => {
                        this.$router.push({ name: 'productList' });
                    });
            }
        }
    }
</script>