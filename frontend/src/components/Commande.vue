<template>
    <div id="tableau">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <button type="button" @click="displayForm(0)" class="btn">
                        Ajouter <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                            <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
                            <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        </svg>
                    </button>
                    <div class="table-responsive">
                        <table id="mytable" class="table table-bordred table-striped">
                            <thead>
                                <th>Date</th>
                                <th>Mode</th>
                                <th>Client</th>
                                <th>État commande</th>
                                <th>Total commande</th>
                                <th>Vendeur</th>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
                                    <td>{{ value.date }}</td>
                                    <td>{{ value.mode }}</td>
                                    <td>{{ value.client }}</td>
                                    <td>{{ value.etat }}</td>
                                    <td>{{ value.total }}</td>
                                    <td>{{ value.vendeur }}</td>
                                    <td>
                                        <div class="modif" @click="editRow(value.id)">
                                            <svg
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 16 16"
                                                class="bi bi-pencil-square"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                />
                                            </svg>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="suppr" @click="deleteRow(value.id)">
                                            <svg
                                                class="bi bi-trash"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 16 16"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Chat v-if="statusCode != 200" :error="error" :statusCode="statusCode" :size="400" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Chat from '@/components/Chat.vue'
    import alertToast from '@/assets/js/swal.js'

    export default {
        name: "Commande",

        data() {
            return {
                values: [],
                statusCode: 200,
                retry: 0,
                error: ""
            }
        },
        components: {
            Chat
        },
        mounted() {
            this.reload()
        },
        methods: {
            reload() {
                this.$emit('setLoader', true)
                axios({
                    method: "get",
                    url: "http://127.0.0.1:3000/commandes"
                })
                    .then(rep => {
                        this.values = rep.data;

                        for (let val in this.values) {
                            axios({
                                method: "get",
                                url: `http://127.0.0.1:3000/employes/${this.values[val].vendeur_id}`
                            })
                                .then(rep => {
                                    this.statusCode = rep.status
                                    this.values[val].vendeur = `${rep.data.nom} - ${rep.data.prenom}`

                                    axios({
                                        method: "get",
                                        url: `http://127.0.0.1:3000/clients/${this.values[val].client_id}`
                                    })
                                        .then(rep => {
                                            this.statusCode = rep.status
                                            this.values[val].client = `${rep.data.nom} - ${rep.data.prenom}`
                                            this.$emit('setLoader', false)
                                            this.$forceUpdate()
                                        })
                                        .catch(err => {
                                            if(this.retry >= 3)
                                                this.$emit('setLoader', false)
                                            alertToast('Erreur', err, 'error', this)
                                        });
                                })
                                .catch(err => {
                                    if(this.retry >= 3)
                                        this.$emit('setLoader', false)
                                    alertToast('Erreur', err, 'error', this)
                                });
                        }
                    })
                    .catch(err => {
                        if(this.retry >= 3)
                            this.$emit('setLoader', false)
                        alertToast('Erreur', err, 'error', this)
                    });
            },
            displayForm(id) {
                
                let commande = {}
                let t = id === 0? 'Nouvelle' : 'Modification d\'une'
                let optionEmp
                let optionCli

                axios({
                    method: "get",
                    url: `http://127.0.0.1:3000/employes`
                })
                    .then(rep => {
                        this.statusCode = rep.status
                        rep.data.forEach(e => {
                            optionEmp += `<option value="${e.id}">${e.nom} - ${e.prenom}</option>`
                        })

                        axios({
                            method: "get",
                            url: `http://127.0.0.1:3000/clients`
                        })
                            .then(rep => {
                                this.statusCode = rep.status
                                rep.data.forEach(e => {
                                    optionCli += `<option value="${e.id}">${e.nom} - ${e.prenom}</option>`
                                })
                                
                                this.$swal({
                                    title: `${t} commande`,
                                    html:
                                        `<form><div class="form-group input-group"><div class="input-group-prepend"><div class="input-group-text">Date</div></div>`+
                                        `<input id="date" type="date" class="col form-control"></div>` +
                                        '<div class="form-row"><div class=" form-group col"><input id="mode" type="text" class="form-control" placeholder="Mode"></div>' +
                                        '<div class="form-group col"><input id="etat" type="text" class="form-control" placeholder="Etat commande"></div>' +
                                        '<div class="form-group col"><input id="total" type="number" class="form-control" placeholder="Total commande"></div></div>' +
                                        `<div class="form-row"><div class=" form-group col"><select id="vendeur_id" class="form-control"><option selected value="0">Sélection d'un vendeur</option>${optionEmp}</select></div>` +
                                        `<div class="form-group col"><select id="client_id" class="form-control"><option selected value="0">Sélection d'un client</option>${optionCli}</select></div></div></form>`,
                                    focusConfirm: false,
                                    onRender: () => {
                                        if(id != 0) {
                                            axios({
                                                method: "get",
                                                url: `http://127.0.0.1:3000/commandes/${id}`
                                            })
                                                .then(rep => {
                                                    this.statusCode = rep.status
                                                    document.getElementById('date').value = rep.data.date
                                                    document.getElementById('mode').value = rep.data.mode
                                                    document.getElementById('etat').value = rep.data.etat
                                                    document.getElementById('total').value = rep.data.total
                                                    document.getElementById('client_id').value = rep.data.client_id
                                                    document.getElementById('vendeur_id').value = rep.data.vendeur_id
                                                })
                                                .catch(err => {
                                                    alertToast('Erreur', err, 'error', this)
                                                });
                                        }
                                    },
                                    preConfirm: () => {
                                        let topOk = true

                                        commande.date = document.getElementById('date').value
                                        commande.mode = document.getElementById('mode').value
                                        commande.etat = document.getElementById('etat').value
                                        commande.total = document.getElementById('total').value
                                        commande.client_id = document.getElementById('client_id').value
                                        commande.vendeur_id = document.getElementById('vendeur_id').value

                                        if(commande.date == "") {
                                            topOk = false
                                            this.$swal.showValidationMessage('Date obligatoire.')
                                        }
                                        if(commande.mode == "") {
                                            topOk = false
                                            this.$swal.showValidationMessage('Mode obligatoire.')
                                        }
                                        if(commande.etat == "") {
                                            topOk = false
                                            this.$swal.showValidationMessage('Etat obligatoire.')
                                        }
                                        if(commande.total == "") {
                                            topOk = false
                                            this.$swal.showValidationMessage('Total obligatoire.')
                                        }
                                        if(commande.client_id == 0) {
                                            topOk = false
                                            this.$swal.showValidationMessage('Client obligatoire.')
                                        }
                                        if(commande.vendeur_id == 0) {
                                            topOk = false
                                            this.$swal.showValidationMessage('Vendeur obligatoire.')
                                        }

                                        if(topOk) {
                                            
                                            if(id != 0) {
                                                axios({
                                                    method: "put",
                                                    url: `http://127.0.0.1:3000/commandes/${id}`,
                                                    data: commande
                                                })
                                                    .then(rep => {
                                                        this.statusCode = rep.status
                                                        alertToast('Mise à jour réussie', {message: ''}, 'success', this)
                                                    })
                                                    .catch(err => {
                                                        alertToast('Erreur', err, 'error', this)
                                                    });
                                            }
                                            else {
                                                axios({
                                                    method: "post",
                                                    url: `http://127.0.0.1:3000/commandes`,
                                                    data: commande
                                                })
                                                    .then(rep => {
                                                        this.statusCode = rep.status
                                                        alertToast('Ajout réussi', {message: ''}, 'success', this)
                                                    })
                                                    .catch(err => {
                                                        alertToast('Erreur', err, 'error', this)
                                                    });
                                            }
                                        }
                                    }
                                })
                            })
                            .catch(err => {
                                alertToast('Erreur', err, 'error', this)
                            })

                    })
                    .catch(err => {
                        alertToast('Erreur', err, 'error', this)
                    })
            },
            deleteRow(id) {
                axios({
                    method: "delete",
                    url: `http://127.0.0.1:3000/commandes/${id}`
                })
                    .then(rep => {
                        this.statusCode = rep.status
                        alertToast('Elément supprimé.', {message: ''}, 'success', this)
                    })
                    .catch(err => {
                        alertToast('Erreur', err, 'error', this)
                    });
            },
            editRow(id) {
                this.displayForm(id)
            }
        }
    }
</script>