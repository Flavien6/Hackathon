<template>
    <div id="nav">
      <nav class="navbar navbar-dark bg-light fixed-top">
        <NavLink  url="/" name="Super ce logo" class="navbar-brand" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(item, id) in linkItems" :key="id">
              <NavLink  :url="item.url" :name="item.name" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>

<script>
    import NavLink from './NavLink'

    export default {
        name: 'Nav',
        props: {

        },
        data() {
            return {
                linkItems: [
                    {
                        name: "Accueil",
                        url: "/"
                    },
                    {
                        name: "Visualiser",
                        url: "/visualisez"
                    }
                ]
            }
        },
        methods: {

        },
        computed: {

        },
        mounted() {

        },
        components: {
            NavLink
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  .navbar {
    background-color: #2c3e50 !important;

    button:focus {
      outline: none;
    }

    a {
      font-weight: bold;

      &:hover, &:focus{
          color: inherit;
          text-decoration: none;
          transition: all 0.3s;
      }

      &.router-link-exact-active{
        color: #42b983 !important;
      }

      &.nav-link:hover {
        color: #42b983;
      }
    }
  }

  margin-bottom: 56px;
}
</style>
