<template>
    <div class="visu">
        <!--<img alt="Vue logo" src="../assets/logo.png" />-->
        <div>
            <Visualisation />
        </div>
    </div>
</template>

<style scoped lang="scss">
$v: #42b983;
$m: #2c3e50;

/deep/ #tabVisu {
    padding-top: 2%;
    
    nav {
        a {
            color: $v;
            font-weight: bold;
            border-bottom: none !important;
        }
        a.active {
            color: $v !important;
            background: $m !important;
        }
    }

    .nav-pills .nav-item.active {
        box-shadow: 8px 8px 12px #cbcbcb, -8px -8px 12px #ffffff;
    }
}

/deep/ .btn {
        margin: 2%;
        margin-bottom: 0;
        background: $v;
        transition: 0.5s;
        color: white;
        font-weight: bold;

        &:hover{
            transition: 0.5s;
            background-color: $m!important;
            color: $v!important;
            border-radius: 8px;
            overflow: visible;
            transform: scale(1.15);
        }
}

/deep/ .table-responsive {
    margin-top: 1.5%;
    border-radius: 8px !important;
    box-shadow: 8px 8px 12px #cbcbcb, -8px -8px 12px #ffffff;
    margin-bottom: 2%;

  table {
    margin-bottom: 0;
    padding-bottom: 3%;

    thead {
      background: $m;
      th {
        color: $v;
      }
    }

    .scrollableTbody{
      width: 100%;
      overflow: auto;
      height: 450px;
    }

    tbody {

      tr {
        td {
          .modif {
            color: #f0ad4e;
            width: 35px;
            height: 35px;
            border: 1px solid #f0ad4e;
            border-radius: 8px;
            transition: 0.5s;
            margin-right: 10%;

            svg {
              margin-top: 50%;
              transform: translate(50%, -50%);
              margin-right: 50%;
            }

            &:hover {
              transition: 0.5s;
              background-color: #f0ad4e;
              border-radius: 8px;
              overflow: visible;
              color: white;
              transform: scale(1.15);
              cursor: pointer;
            }
          }
          /*Style de la poubelle pour supprimer les personnes de la liste */
          .suppr {
            color: #ff4444;
            width: 35px;
            height: 35px;
            border: 1px solid #ff4444;
            border-radius: 8px;            
            transition: 0.5s;
            
            svg {
              margin-top: 50%;
              transform: translate(50%, -50%);
              margin-right: 50%;
            }

            &:hover {
              transition: 0.5s;
              background-color: #ff4444;
              border-radius: 8px;
              overflow: visible;
              color: white;
              transform: scale(1.15);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>

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
