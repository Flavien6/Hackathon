<template>
    <div id="tableau">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table id="mytable" class="table table-bordred table-striped">                    
                            <thead>                    
                                <th><input type="checkbox" id="checkall" /></th>
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
                                    <td><input type="checkbox" class="checkthis" /></td>
                                    <td>{{ values.nom }}</td>
                                    <td>{{ values.description }}</td>
                                    <td>{{ values.categorie }}</td>
                                    <td>{{ values.poids }}</td>
                                    <td>{{ values.garantie_duree }}</td>
                                    <td>{{ values.fournisseur }}</td>
                                    <td>{{ values.produit_etat }}</td>
                                    <td>{{ values.prix_liste }}</td>
                                    <td>{{ values.prix_mini }}</td>
                                    <td>{{ values.url_catalogue }}</td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
                                </tr>
                            </tbody>      
                        </table>
                    </div>                                
                </div>
            </div>
        </div>

        <Modal/>
    </div>
</template>

<script>
    import axios from 'axios'
    import Modal from './modal'

    export default {
        name: "Produit",

        data() {
            return {
                values: []
            }
        },
        components: {
            Modal
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