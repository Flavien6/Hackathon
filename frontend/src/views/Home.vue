<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--<HelloWorld msg="C'est ma bite"/>-->
  </div>
</template>

<style lang="scss">
  .home {
    img {
      transform: rotate(60deg) translateY(80px);
    }
  }
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            // HelloWorld
        }
    }
</script>
