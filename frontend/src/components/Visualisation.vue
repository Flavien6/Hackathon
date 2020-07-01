<template>
  <div id="tabVisu">
    <nav class="nav nav-tabs">
      <a class="nav-item nav-link active" href="#p1" data-toggle="tab">Onglet 1</a>
      <a class="nav-item nav-link" href="#p2" data-toggle="tab">Onglet 2</a>
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
    url: String,
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
</style>
