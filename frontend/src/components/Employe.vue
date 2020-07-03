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
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
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
        name: "Employe",

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
                axios({
                    method: "get",
                    url: "http://127.0.0.1:3000/employes"
                })
                    .then(rep => {
                        this.statusCode = rep.status
                        this.values = rep.data;

                        for (let val in this.values) {
                            axios({
                                method: "get",
                                url: `http://127.0.0.1:3000/emplois/${this.values[val].emploi_id}`
                            })
                                .then(rep => {
                                    this.statusCode = rep.status
                                    this.values[val].emploi = rep.data.titre;
                                    axios({
                                        method: "get",
                                        url: `http://127.0.0.1:3000/departements/${this.values[val].departement_id}`
                                    })
                                        .then(rep => {
                                            this.statusCode = rep.status
                                            this.values[val].departement = rep.data.nom;
                                            if(this.values[val].manager_e_id > 0) {
                                                axios({
                                                    method: "get",
                                                    url: `http://127.0.0.1:3000/employes/${this.values[val].manager_e_id}`
                                                })
                                                    .then(rep => {
                                                        this.statusCode = rep.status
                                                        this.values[val].manager = `${rep.data.nom} - ${rep.data.prenom}`;
                                                        this.$forceUpdate();
                                                    })
                                                    .catch(err => {
                                                        alertToast('Erreur', err, 'error', this)
                                                    });
                                            }
                                            
                                            this.$forceUpdate();
                                        })
                                        .catch(err => {
                                            alertToast('Erreur', err, 'error', this)
                                        });
                                })
                                .catch(err => {
                                    alertToast('Erreur', err, 'error', this)
                                });
                        }
                    })
                    .catch(err => {
                        alertToast('Erreur', err, 'error', this)
                    });
            },
            displayForm(id) {
                
                let employe = {}
                let t = id === 0? 'Nouvel' : 'Modification d\'un'
                let optionDep
                let optionMan
                let optionEmp

                axios({
                    method: "get",
                    url: `http://127.0.0.1:3000/employes`
                })
                    .then(rep => {
                        this.statusCode = rep.status
                        rep.data.forEach(e => {
                            optionMan += `<option value="${e.id}">${e.nom} - ${e.prenom}</option>`
                        })

                        axios({
                            method: "get",
                            url:`http://127.0.0.1:3000/departements`
                        })
                            .then(rep => {
                                this.statusCode = rep.status
                                rep.data.forEach(e => {
                                    optionDep += `<option value="${e.id}">${e.nom}</option>`
                                })

                                axios({
                                    method: "get",
                                    url:`http://127.0.0.1:3000/emplois`
                                })
                                    .then(rep => {
                                        this.statusCode = rep.status
                                        rep.data.forEach(e => {
                                            optionEmp += `<option value="${e.id}">${e.titre}</option>`                                                 
                                        })

                                        this.$swal({
                                            title: `${t} employé`,
                                            html:
                                                '<form><div class="form-row"><div class=" form-group col"><input id="prenom" type="text" class="form-control" placeholder="Prénom"></div> '+
                                                '<div class="form-group col"><input id="nom" type="text" class="form-control" placeholder="Nom"></div></div>' +
                                                '<div class="form-group"><input id="email" class="form-control" placeholder="Email"></div>' +
                                                '<div class="form-row"><div class=" form-group col"><input id="tel" type="tel" class="form-control" placeholder="Téléphone"></div> '+                                                
                                                '<div class="form-group col"><input id="salaire" type="number" class="form-control" placeholder="Salaire"></div></div>' +
                                                `<div class="form-group input-group"><div class="input-group-prepend"><div class="input-group-text">Date d'embauche</div></div>`+
                                                `<input id="dateEmbauche" type="date" class="col form-control"></div>` + 
                                                `<div class="form-row"><div class=" form-group col"><select id="emploi" class="form-control"><option selected value="0">Sélection d'un emploi</option>${optionEmp}</select></div> `+
                                                '<div class="form-group col"><input id="tauxCommission" type="number" class="form-control" placeholder="Taux Commission"></div></div>' +
                                                `<div class="form-row"><div class=" form-group col"><select id="manager" class="form-control"><option selected value="0">Sélection d'un manager</option>${optionMan}</select></div> `+
                                                `<div class="form-group col"><select id="departement" class="form-control"><option selected value="0">Sélection d'un département</option>${optionDep}</select></div>`,
                                            focusConfirm: false,
                                            onRender: () => {
                                                if(id != 0) {
                                                    axios({
                                                        method: "get",
                                                        url: `http://127.0.0.1:3000/employes/${id}`
                                                    })
                                                        .then(rep => {
                                                            this.statusCode = rep.status
                                                            document.getElementById('prenom').value = rep.data.prenom
                                                            document.getElementById('nom').value = rep.data.nom
                                                            document.getElementById('email').value = rep.data.email
                                                            document.getElementById('tel').value = rep.data.telephone
                                                            document.getElementById('dateEmbauche').value = rep.data.date_embauche
                                                            document.getElementById('emploi').value = rep.data.emploi_id
                                                            document.getElementById('salaire').value = rep.data.salaire
                                                            document.getElementById('tauxCommission').value = rep.data.taux_commission
                                                            document.getElementById('manager').value = rep.data.manager_e_id
                                                            document.getElementById('departement').value = rep.data.departement_id
                                                        })
                                                        .catch(err => {
                                                            alertToast('Erreur', err, 'error', this)
                                                        });
                                                }
                                            },
                                            preConfirm: () => {
                                                let topOk = true                                                

                                                if (document.getElementById('prenom').value) {
                                                    employe.prenom = document.getElementById('prenom').value
                                                } else {
                                                    topOk = false
                                                    this.$swal.showValidationMessage('Prénom obligatoire.')
                                                }

                                                if (document.getElementById('nom').value) {
                                                    employe.nom = document.getElementById('nom').value
                                                } else {
                                                    topOk = false
                                                    this.$swal.showValidationMessage('Nom obligatoire.')                                                    
                                                }

                                                employe.email = document.getElementById('email').value
                                                employe.telephone = document.getElementById('tel').value

                                                if(document.getElementById('dateEmbauche').value) {
                                                    employe.date_embauche = document.getElementById('dateEmbauche').value
                                                } else {
                                                    topOk = false
                                                    this.$swal.showValidationMessage('Date d\'embauche obligatoire.')
                                                }
                                                
                                                if (document.getElementById('emploi').value != 0) {
                                                    employe.emploi_id = document.getElementById('emploi').value
                                                } else {
                                                    topOk = false
                                                    this.$swal.showValidationMessage('Emploi obligatoire.')
                                                }

                                                if(document.getElementById('salaire').value) {
                                                    employe.salaire = document.getElementById('salaire').value
                                                } else {
                                                    topOk = false
                                                    this.$swal.showValidationMessage('Salaire obligatoire.')
                                                }

                                                if(document.getElementById('tauxCommission').value) {
                                                    employe.taux_commission = document.getElementById('tauxCommission').value
                                                }

                                                if (document.getElementById('manager').value != 0) {
                                                    employe.manager_e_id = document.getElementById('manager').value
                                                }

                                                if (document.getElementById('departement').value != 0) {
                                                    employe.departement_id = document.getElementById('departement').value
                                                } else {
                                                    topOk = false
                                                    this.$swal.showValidationMessage('Département obligatoire.')
                                                }

                                                if(topOk) {
                                                    if(id != 0) {
                                                        axios({
                                                            method: "put",
                                                            url: `http://127.0.0.1:3000/employes/${id}`,
                                                            data: employe
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
                                                            url: `http://127.0.0.1:3000/employes`,
                                                            data: employe
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
                    })
                    .catch(err => {
                        alertToast('Erreur', err, 'error', this)
                    })
            },
            deleteRow(id) {
                axios({
                    method: "delete",
                    url: `http://127.0.0.1:3000/employes/${id}`
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