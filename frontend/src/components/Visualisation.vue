<template>
  <div id="tabVisu" class="container-fluid">
    <nav class="nav nav-tabs">
      <a class="nav-item nav-link" href="#p1" data-toggle="tab">Localisation</a>
      <a class="nav-item nav-link" href="#p2" data-toggle="tab">Département</a>
      <a class="nav-item nav-link" href="#p2" data-toggle="tab">Employé</a>
      <a class="nav-item nav-link" href="#p2" data-toggle="tab">Client</a>
      <a class="nav-item nav-link" href="#p2" data-toggle="tab">Produit</a>
      <a class="nav-item nav-link" href="#p2" data-toggle="tab">Commande</a>
    </nav>
    <div class="tab-content">
      <div class="tab-pane fade" id="p1">Localisation</div>
      <div class="tab-pane fade" id="p2">Département</div>
      <div class="tab-pane fade" id="p3">Employé</div>
      <div class="tab-pane fade" id="p4">Client</div>
      <div class="tab-pane fade" id="p5">Produit</div>
      <div class="tab-pane fade" id="p6">Commande</div>
    </div>
  </div>
</template>

<script>    
    export default {
        name: "Visualisation",
        props: {
            id: Number,
            name: String
        },
        data() {
            return {};
        },
        methods: {},
        computed: {},
        mounted() {}
    };
</script>

<style scoped lang="scss">
$v: #42b942;
$m: #2c3e50;

nav {
  border-bottom: 1px solid $v!important;

  a {
    color: $v;
    font-weight: bold;
    border-bottom: none!important;
  }
  a.active{
    color: $v!important;
    background: $m!important;
  }
}
</style>
