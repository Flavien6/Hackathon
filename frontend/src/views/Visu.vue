<template>
    <div class="visu">
        <!--<img alt="Vue logo" src="../assets/logo.png" />-->
        <div>
            <Visualisation />
        </div>
    </div>
</template>

<style lang="scss"></style>

<script>
    // @ is an alias to /src
    import Visualisation from '@/components/Visualisation.vue'
    export default {
        name: "Visualiser",
        components: {
            Visualisation
        },
        data() {
            return {};
        },
    };
</script>
