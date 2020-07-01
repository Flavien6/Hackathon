<template>
  <div id="nav">
      <div id="mySidenav" class="sidenav">
        <!--<a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>-->
        <ul>
            <li class="nav-item" v-for="(item, id) in linkItems" :key="id">
                <NavLink  :url="item.url" :name="item.name" />
            </li>
        </ul>
      </div>
      
      <div id="burger">
         <tasty-burger-button
         type="arrow"
         color="#42b983"
         activeColor="#42b983"
         @toggle="toggleNav" />
      </div>
    </div>
</template>

<script>
    import NavLink from './NavLink'
    import { TastyBurgerButton }  from 'vue-tasty-burgers'

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
                        url: "/visualiser"
                    }
                ],
                isActive: false,

            }
        },
        methods: {
            /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
            /*nom: () => {

            }

            nom: function() {
              
            }

            nom() {

            }*/

            /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
            openNav() {
                //console.log(this)
                this.$el.querySelector("#mySidenav").style.width = "250px";
                this.$el.querySelector("#burger").style.left = "250px"
            },
            closeNav() {
                this.$el.querySelector("#mySidenav").style.width = "0px";
                this.$el.querySelector("#burger").style.left = "0"
            },
            toggleNav() {
                if(this.isActive) this.closeNav()
                else this.openNav()
                this.isActive = !this.isActive
            },
        },
        computed: {

        },
        mounted() {
                        
        },
        components: {
            NavLink,
            'tasty-burger-button': TastyBurgerButton
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#nav {
   #burger {
      transition: 0.5s;
      position: fixed; 
      z-index: 1; 
      top: 15px;
      padding: 20px;
      left: 0;
      background-color: #2c3e50 !important;
      color: #42b983;
      border-radius: 0 8px 8px 0;
      * {
         vertical-align: middle;
      }
   }

   .sidenav {
      background-color: #2c3e50 !important;
      height: 100%; 
      background-color: #111; 
      overflow-x: hidden; 
      position: fixed; 
      z-index: 1; 
      top: 0; 
      left: 0;
      width: 0;
      transition: 0.5s;
      background-color: #2c3e50;

      .closebtn {
      float: right;
      padding-top: 2%;
      padding-right: 8%;

      &:hover {
         color: #42b942;
      }
      }

      ul {
      padding-top: 60px;
      }

      li {
      font-weight: bold;
      text-decoration: none;
      padding-right: 20%;
      font-size: 25px;
      color: #42b983;
      display: block;
      transition: 0.5s;
      }

      a {
         font-weight: bold;
         text-decoration: none;
         font-size: 25px;
         color: #efefef;
         display: block;
         transition: 0.5s;

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
}
</style>