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
                                <th>Prenom</th>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Tel.</th>
                                <th>Date Embauche</th>
                                <th>Emploi</th>
                                <th>Salaire</th>
                                <th>Taux Commission</th>
                                <th>Manager</th>
                                <th>Departement</th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
                                    <td>
                                        <input type="checkbox" class="checkthis" />
                                    </td>
                                    <td>{{ value.prenom }}</td>
                                    <td>{{ value.nom }}</td>
                                    <td>{{ value.email }}</td>
                                    <td>{{ value.telephone }}</td>
                                    <td>{{ value.date_embauche }}</td>
                                    <td>{{ value.emploi }}</td>
                                    <td>{{ value.salaire }}</td>
                                    <td>{{ value.taux_commission }}</td>
                                    <td>{{ value.manager }}</td>
                                    <td>{{ value.departement }}</td>
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
        name: "Employe",

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