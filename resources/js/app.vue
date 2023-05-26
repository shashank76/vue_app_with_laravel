<template>
    <main>
        <div class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">Laravel VUE Application - Shashank's App</router-link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" exact-active-class="active">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item" exact-active-class="active">
                            <router-link to="/category" class=" nav-link">Category</router-link>
                        </li>
                        <li class="nav-item" exact-active-class="active">
                            <router-link to="/products" class=" nav-link">Products</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
<script>
    export default {}
</script>
