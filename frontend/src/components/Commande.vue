<template>
    <div id="tableau">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table id="mytable" class="table table-bordred table-striped">                    
                            <thead>                    
                                <th><input type="checkbox" id="checkall" /></th>
                                <th>Date</th>
                                <th>Mode</th>
                                <th>Client</th>
                                <th>État commande</th>
                                <th>Total commande</th>
                                <th>Vendeur</th>
                            </thead>
                            <tbody>        
                                <tr v-for="(value, id) in values" :key="id">
                                    <td><input type="checkbox" class="checkthis" /></td>
                                    <td>{{ values.commande_date }}</td>
                                    <td>{{ values.commande_mode }}</td>
                                    <td>{{ values.client }}</td>
                                    <td>{{ values.commande_etat }}</td>
                                    <td>{{ values.commande_total }}</td>
                                    <td>{{ values.vendeur }}</td>
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
        name: "Commande",

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