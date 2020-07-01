<template>
  <div class="visu">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="C'est ma bite"/>-->
    <div>
      <router-link to="/visualiser/edit">Editer</router-link>
    </div>
  </div>
</template>

<style lang="scss">
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Visualiser',
        components: {
            // HelloWorld
        }
    }
</script>
