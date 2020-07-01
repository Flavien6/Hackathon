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
                                <th>Manager</th>
                                <th>Localisation</th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
                                    <td>
                                        <input type="checkbox" class="checkthis" />
                                    </td>
                                    <td>{{ value.nom }}</td>
                                    <td>{{ value.manager }}</td>
                                    <td>{{ value.localisation }}</td>
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
        name: "Departement",

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