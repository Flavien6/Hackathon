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
                                <th>Date</th>
                                <th>Mode</th>
                                <th>Client</th>
                                <th>État commande</th>
                                <th>Total commande</th>
                                <th>Vendeur</th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
                                    <td>
                                        <input type="checkbox" class="checkthis" />
                                    </td>
                                    <td>{{ value.commande_date }}</td>
                                    <td>{{ value.commande_mode }}</td>
                                    <td>{{ value.client }}</td>
                                    <td>{{ value.commande_etat }}</td>
                                    <td>{{ value.commande_total }}</td>
                                    <td>{{ value.vendeur }}</td>
                                    <td></td>
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
        name: "Commande",

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