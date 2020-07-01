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
                                    <td>
                                        <input type="checkbox" class="checkthis" />
                                    </td>
                                    <td>{{ value.prenom }}</td>
                                    <td>{{ value.nom }}</td>
                                    <td>{{ value.adresse }}</td>
                                    <td>{{ value.telephone }}</td>
                                    <td>{{ value.email }}</td>
                                    <td>{{ value.limite_credit }}</td>
                                    <td>{{ value.gestionnaire_compte }}</td>
                                    <td>{{ value.date_naissance }}</td>
                                    <td>{{ value.sexe }}</td>
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
        name: "Client",

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