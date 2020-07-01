<template>
    <div id="tableau">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table id="mytable" class="table table-bordred table-striped">
                            <thead>
                                <th>
                                    <input type="checkbox" id="checkall" />
                                </th>
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Categorie</th>
                                <th>Poids</th>
                                <th>Durée garantie</th>
                                <th>Fournisseur</th>
                                <th>État produit</th>
                                <th>Prix liste</th>
                                <th>Prix mini</th>
                                <th>Catalogue url</th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
                                    <td>
                                        <input type="checkbox" class="checkthis" />
                                    </td>
                                    <td>{{ value.nom }}</td>
                                    <td>{{ value.description }}</td>
                                    <td>{{ value.categorie }}</td>
                                    <td>{{ value.poids }}</td>
                                    <td>{{ value.garantie_duree }}</td>
                                    <td>{{ value.fournisseur }}</td>
                                    <td>{{ value.produit_etat }}</td>
                                    <td>{{ value.prix_liste }}</td>
                                    <td>{{ value.prix_mini }}</td>
                                    <td>{{ value.url_catalogue }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Produit",

        data() {
            return {
                values: []
            }
        },
        components: {
            
        },
        mounted(){            
            axios
                .get('url')
                .then(response => {
                    this.values = response.data
                })
                .catch(function (error) {
                    console.log(error)
                })
        }
    }
</script>