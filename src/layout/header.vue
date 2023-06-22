<script setup>
import { RouterLink } from 'vue-router'
</script>

<template >
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <div class="col-sm-2 d-flex align-items-center mb-2 mb-lg-0">
                    <a href="/" class=" text-white text-decoration-none">
                      <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" />
                    </a>
                </div>
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><RouterLink class="nav-link px-2 text-white" to="/">Home</RouterLink></li>
                    <li><RouterLink class="nav-link px-2 text-white" to="/about">About</RouterLink></li>
                </ul>

                <form class="col-sm-3 col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
                </form>
            </div>
        </div>
    </header>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
