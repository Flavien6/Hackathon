<template>
    <div id="tableau">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>Bootstrap Snipp for Datatable</h4>
                    <div class="table-responsive">
                        <table id="mytable" class="table table-bordred table-striped">                    
                            <thead>                    
                                <th><input type="checkbox" id="checkall" /></th>
                                <th>Prénom</th>
                                <th>Nom</th>
                                <th>Adresse</th>
                                <th>Tel.</th>
                                <th>Email</th>
                                <th>Limite Crédit</th>
                                <th>Gestionnaire</th>
                                <th>Naissance</th>
                                <th>Sexe</th>
                            </thead>
                            <tbody>        
                                <tr v-for="(value, id) in values" :key="id">
                                    <td><input type="checkbox" class="checkthis" /></td>
                                    <td>{{ values.prenom }}</td>
                                    <td>{{ values.nom }}</td>
                                    <td>{{ values.adresse }}</td>
                                    <td>{{ values.telephone }}</td>
                                    <td>{{ values.email }}</td>
                                    <td>{{ values.limite_credit }}</td>
                                    <td>{{ values.gestionnaire_compte }}</td>
                                    <td>{{ values.date_naissance }}</td>
                                    <td>{{ values.sexe }}</td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span class="glyphicon glyphicon-pencil"></span></button></p></td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span class="glyphicon glyphicon-trash"></span></button></p></td>
                                </tr>
                            </tbody>      
                        </table>

                        <div class="clearfix">

                        </div>
                        <ul class="pagination pull-right">
                            <li class="disabled"><a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a></li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><span class="glyphicon glyphicon-chevron-right"></span></a></li>
                        </ul>
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
        name: "Client",

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