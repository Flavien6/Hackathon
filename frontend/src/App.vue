<template>
    <div id="app">
        <Nav />
        <router-view />
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'

    export default {
        components: {
            Nav
        }
    }
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    //background-color: #42b983;
    background-color: #efefef;
    min-height: 100vh;
}
</style>
