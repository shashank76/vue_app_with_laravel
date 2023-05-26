<template>
    <div class="col-12 mb-2 text-end">
        <router-link :to='{name: "productAdd"}' class="btn btn-primary">Create</router-link>
    </div>
    <v-card>
        <v-card-title>
        Products
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="products"
        item-value="name"
        class="elevation-1"
        :search="search"
        :group-by="groupBy"
        >
        <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editProduct(item.raw.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteProduct(item.raw.id)">mdi-delete</v-icon>
        </template>
        <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
            <tr>
                <td :colspan="columns.length">
                <VBtn
                    size="small"
                    variant="text"
                    :icon="isGroupOpen(item) ? '$expand' : '$next'"
                    @click="toggleGroup(item)"
                ></VBtn>
                {{ item.value ? 'Available' : 'Out of Stock' }}
                </td>
            </tr>
        </template>
        </v-data-table>
    </v-card>
  </template>
 
<script>
    import axios from 'axios';
    export default {
    name: "products",
    data(){
        return{
            itemsPerPage: 5,
            search: '',
            groupBy: [
                {
                    key: 'availability',
                    order: 'desc',
                },
            ],
            headers: [
                {
                    title: 'Name',
                    sortable: false,
                    groupable: false,
                    key: 'name',
                },
                { title: 'Price', key: 'price' },
                { title: 'Availability', key: 'availability' },
                { title: 'Size', key: 'size' },
                { title: 'Color', key: 'color' },
                { title: 'Stock', key: 'stock' },
                {
                    title: 'Actions',
                    key: 'actions',
                    orderable: false,
                    searchable: false,
                    sortable: false,
                },
            ],
            products: []
        }
    },
    mounted(){
        this.getproducts()
    },
    methods:{
        async getproducts(){
            await axios.get('/api/product').then(response=>{
                this.products = response.data
            }).catch(error=>{
                console.log(error)
                this.products = []
            })
        },
        deleteProduct(id){
            if(confirm("Are you sure to delete this product ?")){
                axios.delete('/api/product/'+id).then(response=>{
                    this.getproducts()
                }).catch(error=>{
                    console.log(error)
                })
            }
        },
        editProduct(id) {
            debugger;
            this.$router.push({ name: "productEdit", params: { id: id } });
        }
    }
}
</script>