
import Dashobard from './Dashboard/Index.vue';
import CategoryList from './Category/List.vue';
import CategoryCreate from './Category/Add.vue';
import CategoryEdit from './Category/Edit.vue';
import ProductList from './Product/List.vue';
import ProductCreate from './Product/Add.vue';
import ProductEdit from './Product/Edit.vue';
export const routes = [
    {
        name: 'home',
        path: '/',
        component: Dashobard
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    },
    {
        name: 'productList',
        path: '/products',
        component: ProductList
    },
    {
        name: 'productAdd',
        path: '/product/add',
        component: ProductCreate
    },
    {
        name: 'productEdit',
        path: '/product/:id/edit',
        component: ProductEdit
    }
]