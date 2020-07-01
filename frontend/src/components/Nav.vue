<template>
    <div id="nav">
      <NavLink :url="item.url" :name="item.name" />
        <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="sidebar-header">
                <h3>Menu Principal</h3>
            </div>

            <script>//on definie la class active en fonction de la valeur de activeCollapse</script>
            <span @click="slt" :class="{active:activeCollapse}">test</span>
            <ul class="list-unstyled components">
                <li class="nav-link">
                    <router-link to="/" active-class="active">Accueil</router-link>
                </li>
                <li class="nav-link">
                    <router-link to="/visualiser" active-class="active">Visualisation</router-link>
                </li>

            </ul>

        </nav>
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" @click="slt" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span @click="slt">Toggle Sidebar</span>
                    </button>

                </div>
            </nav>
        </div>-->
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
  a {
    font-weight: bold;

    &:hover, &:focus{
        color: inherit;
        text-decoration: none;
        transition: all 0.3s;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
