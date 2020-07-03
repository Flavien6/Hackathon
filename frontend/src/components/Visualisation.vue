<template>
    <div id="tabVisu" class="container-fluid">
        <nav class="nav nav-pills justify-content-center">
            <a class="nav-item nav-link active" href="#p1" @click="loadComponent" data-toggle="tab">Localisation</a>
            <a class="nav-item nav-link" href="#p2" @click="loadComponent" data-toggle="tab">Département</a>
            <a class="nav-item nav-link" href="#p3" @click="loadComponent" data-toggle="tab">Employé</a>
            <a class="nav-item nav-link" href="#p4" @click="loadComponent" data-toggle="tab">Client</a>
            <a class="nav-item nav-link" href="#p5" @click="loadComponent" data-toggle="tab">Produit</a>
            <a class="nav-item nav-link" href="#p6" @click="loadComponent" data-toggle="tab">Commande</a>
        </nav>        

        <div class="tab-content">
            <div class="tab-pane fade active show">
                <component :is="currentComp" />
            </div>
        </div>
    </div>
</template>

<script>
    import Localisation from './Localisation'
    import Departement from './Departement'
    import Employe from './Employe'
    import Client from './Client'
    import Produit from './Produit'
    import Commande from './Commande'

    export default {
        name: "Visualisation",
        data() {
            return {
                locKey: 0,
                depKey: 0,
                empKey: 0,
                cliKey: 0,
                proKey: 0,
                comKey: 0,
                currentComp: 'Localisation'
            };
        },
        components: {
            Localisation,
            Departement,
            Employe,
            Client,
            Produit,
            Commande
        },
        methods: {
            loadComponent(e) {
                this.currentComp = e.target.innerHTML.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            },
            reloadLoc : function() {
                this.locKey++
            },
            reloadDep : function() {
                this.depKey++
            },
            reloadEmp : function() {
                this.empKey++
            },
            reloadCli : function() {
                this.cliKey++
            },
            reloadPro : function() {
                this.proKey++
            },
            reloadCom : function() {
                this.comKey++
            }
        }
    };
</script>

<style scoped lang="scss">
$v: #42b983;
$m: #2c3e50;

#tabVisu {
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
}
</style>
