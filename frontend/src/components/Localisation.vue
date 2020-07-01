<template>
    <div id="tableau">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table id="mytable" class="table table-bordred table-striped">                    
                            <thead>                    
                                <th><input type="checkbox" id="checkall" /></th>
                                <th>Adresse</th>
                                <th>Code Postal</th>
                                <th>Ville</th>
                                <th>Region</th>
                                <th>Secteur</th>
                            </thead>
                            <tbody>        
                                <tr v-for="(value, id) in values" :key="id">
                                    <td><input type="checkbox" class="checkthis" /></td>
                                    <td>{{ values.adresse }}</td>
                                    <td>{{ values.cp }}</td>
                                    <td>{{ values.ville }}</td>
                                    <td>{{ values.region }}</td>
                                    <td>{{ values.secteur }}</td>
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
        name: "Localisation",

        data() {
            return {
                values : []
            }
        },
        components: {
            Modal
        },
        mounted(){            
            axios
                .get('127.0.0.1:3000')
                .then(response => {
                    this.values = response.data
                })
                .catch(function (error) {
                    console.log(error)
                })
        }        
    }
</script>