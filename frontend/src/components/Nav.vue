<template>
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="sidebar-header">
                <h3>Menu Principal</h3>
            </div>
            
            <!-- on definie la class active en fonction de la valeur de activeCollapse -->
            <span @click="slt" :class="{active:activeCollapse}">test</span>
            <!--<ul class="list-unstyled components">
                <li class="nav-link">
                    <router-link to="/" active-class="active">Accueil</router-link>
                </li>
                <li class="nav-link">
                    <router-link to="/visualiser" active-class="active">Visualisation</router-link>
                </li>
                
            </ul>-->
            
        </nav>
        <!--<div id="content">
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
    export default {
        name: 'Nav',
        data() {
            return {
                activeCollapse: true
            }
        },
        methods: {
            slt() {
                console.log("ouais ouais oauisu")
                this.activeCollapse = !this.activeCollapse
                console.log(this.activeCollapse)
            }
        },
        computed: {

        },
        mounted() {
            this.slt()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  height: 0;
  margin-bottom: 56px;
  display: flex;
  width: 100%;
  align-items: stretch;

  nav {
  }

  a {
    font-weight: bold;
    color: #2c3e50;

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

@media (max-width: 768px) {
    nav {
        margin-left: -250px;

        &:active{
            margin-left: 0;
        }
    }
}
</style>
