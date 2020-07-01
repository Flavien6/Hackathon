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
                                <th>Adresse</th>
                                <th>Code Postal</th>
                                <th>Ville</th>
                                <th>Region</th>
                                <th>Secteur</th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
                                    <td>
                                        <input type="checkbox" class="checkthis" />
                                    </td>
                                    <!--<td>{{ values.adresse }}</td>
                                    <td>{{ value.cp }}</td>
                                    <td>{{ value.ville }}</td>
                                    <td>{{ value.region }}</td>
                                    <td>{{ value.secteur }}</td>-->
                                    <td>{{ value.prenom }}</td>
                                    <td>{{ value.nom }}</td>
                                    <td>{{ value.adresse }}</td>
                                    <td>{{ value.telephone }}</td>
                                    <td>{{ value.limite_credit }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
table {
    overflow-y: hidden;
    max-height: 500px;
}
</style>

<script>
    import axios from "axios";

    export default {
        name: "Localisation",

        data() {
            return {
                values: []
            };
        },
        components: {
            
        },
        mounted() {
            axios({
                method: 'get',
                url: 'http://127.0.0.1:3000/clients'
            })
                .then(rep => {
                    this.values = rep.data
                    console.log(this.values.nom)
                    console.log(rep.data)
                })
                .catch(err => {
                    console.log(err)
                })

            /*axios
                .get('http://127.0.0.1:3000/clients')
                .then(response => {
                    this.values = response.data;
                })
                .catch(function(error) {
                    console.log(error);
                });*/
        }
    };
</script>
