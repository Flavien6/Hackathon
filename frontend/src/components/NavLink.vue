<template>
    <!--:class="{active:isActive}"-->
    <router-link :to="url" active-class="active" class="nav-link" exact>{{ name }}</router-link>
</template>

<script>
    export default {
        name: 'NavLink',
        props: {
            url: String,
            name: String
        },
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {

        },
        mounted() {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
