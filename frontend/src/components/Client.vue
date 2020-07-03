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
                                <th>Sexe</th>
                                <th>Prénom</th>
                                <th>Nom</th>
                                <th>Adresse</th>
                                <th>Tel.</th>
                                <th>Email</th>
                                <th>Naissance</th>
                                <th>Limite Crédit</th>
                                <th>Gestionnaire</th>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
                                    <td>{{ value.des }}</td>
                                    <td>{{ value.prenom }}</td>
                                    <td>{{ value.nom }}</td>
                                    <td>{{ value.adresse }}</td>
                                    <td>{{ value.telephone }}</td>
                                    <td>{{ value.email }}</td>
                                    <td>{{ value.date_naissance }}</td>
                                    <td>{{ value.limite_credit }}</td>
                                    <td>{{ value.gestionnaire_compte }}</td>
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
        name: "Client",

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
                    url: "http://127.0.0.1:3000/clients"
                })
                    .then(rep => {
                        
                        this.statusCode = rep.status
                        this.values = rep.data;

                        for (let val in this.values) {
                            axios({
                                method: "get",
                                url: `http://127.0.0.1:3000/employes/${this.values[val].gestionnaire_compte_id}`
                            })
                                .then(rep => {
                                    
                                    this.statusCode = rep.status
                                    this.values[val].gestionnaire_compte = `${rep.data.nom} - ${rep.data.prenom}`;
                                    switch (this.values[val].sexe) {
                                    case 'M':
                                        this.values[val].des = 'M.'
                                        break;
                                    default:
                                        this.values[val].des = 'Mme.'
                                        break;
                                    }
                                    this.$forceUpdate();
                                    
                                    this.$emit('setLoader', false)
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
                
                let client = {}
                let t = id === 0? 'Nouveau' : 'Modification d\'un'
                let optionEmp

                axios({
                    method: "get",
                    url: `http://127.0.0.1:3000/employes`
                })
                    .then(rep => {
                        this.statusCode = rep.status
                        rep.data.forEach(e => {
                            optionEmp += `<option value="${e.id}">${e.nom} - ${e.prenom}</option>`
                        })

                        this.statusCode = rep.status
                        this.$swal({
                            title: `${t} client`,
                            html:
                                '<form><div class="form-row"><div class="form-group col"><select id="sexe" class="form-control">' +
                                '<option selected value="M">M.</option><option value="F">Mme.</option></select></div>' +
                                '<div class="form-group col"><input id="nom" type="text" class="form-control" placeholder="Nom"></div>' +
                                '<div class="form-group col"><input id="prenom" type="text" class="form-control" placeholder="Prénom"></div></div>' +
                                `<div class="form-group input-group"><div class="input-group-prepend"><div class="input-group-text">Date de naissance</div></div>`+
                                `<input id="date_naissance" type="date" class="col form-control"></div>` +
                                '<div class="form-group"><input id="adresse" type="text" class="form-control" placeholder="Adresse"></div>' +
                                '<div class="form-row"><div class=" form-group col"><input id="telephone" type="text" class="form-control" placeholder="Téléphone"></div>' +
                                '<div class="form-group col"><input id="email" type="text" class="form-control" placeholder="Email"></div></div>' +
                                '<div class="form-row"><div class=" form-group col"><input id="limite_credit" type="text" class="form-control" placeholder="Limite Credit"></div>' +
                                `<div class="form-group col"><select id="gestionnaire_compte_id" class="form-control"><option selected value="0">Sélection d'un gestionnaire</option>${optionEmp}</select></div></div></form>`,
                            focusConfirm: false,
                            onRender: () => {
                                if(id != 0) {
                                    axios({
                                        method: "get",
                                        url: `http://127.0.0.1:3000/clients/${id}`
                                    })
                                        .then(rep => {
                                            this.statusCode = rep.status
                                            document.getElementById('sexe').value = rep.data.sexe
                                            document.getElementById('nom').value = rep.data.nom
                                            document.getElementById('prenom').value = rep.data.prenom
                                            document.getElementById('date_naissance').value = rep.data.date_naissance
                                            document.getElementById('adresse').value = rep.data.adresse
                                            document.getElementById('telephone').value = rep.data.telephone
                                            document.getElementById('email').value = rep.data.email
                                            document.getElementById('limite_credit').value = rep.data.limite_credit
                                            document.getElementById('gestionnaire_compte_id').value = rep.data.gestionnaire_compte_id
                                        })
                                        .catch(err => {
                                            alertToast('Erreur', err, 'error', this)
                                        });
                                }
                            },
                            preConfirm: () => {
                                let topOk = true

                                client.sexe = document.getElementById('sexe').value

                                if (document.getElementById('nom').value) {
                                    client.nom = document.getElementById('nom').value
                                } else {
                                    topOk = false
                                    this.$swal.showValidationMessage('Nom obligatoire.')
                                }

                                if (document.getElementById('prenom').value) {
                                    client.prenom = document.getElementById('prenom').value
                                } else {
                                    topOk = false
                                    this.$swal.showValidationMessage('Prenom obligatoire.')
                                }

                                if(document.getElementById('date_naissance').value) {
                                    client.date_naissance = document.getElementById('date_naissance').value
                                }

                                client.adresse = document.getElementById('adresse').value
                                client.telephone = document.getElementById('telephone').value
                                client.email = document.getElementById('email').value

                                if(document.getElementById('limite_credit').value) {
                                    client.limite_credit = document.getElementById('limite_credit').value
                                }

                                if (document.getElementById('gestionnaire_compte_id').value != 0) {
                                    client.gestionnaire_compte_id = document.getElementById('gestionnaire_compte_id').value
                                } else {
                                    topOk = false
                                    this.$swal.showValidationMessage('Gestionnaire obligatoire.')
                                }

                                if(topOk) {
                                    if(id != 0) {
                                        axios({
                                            method: "put",
                                            url: `http://127.0.0.1:3000/clients/${id}`,
                                            data: client
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
                                            url: `http://127.0.0.1:3000/clients`,
                                            data: client
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
            },
            deleteRow(id) {
                axios({
                    method: "delete",
                    url: `http://127.0.0.1:3000/clients/${id}`
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