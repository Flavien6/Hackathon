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
                                <th>Nom</th>
                                <th>Description</th>
                                <th>Categorie</th>
                                <th>Poids</th>
                                <th>Durée garantie</th>
                                <th>Fournisseur</th>
                                <th>État produit</th>
                                <th>Prix liste</th>
                                <th>Prix mini</th>
                                <th>Catalogue url</th>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr v-for="(value, id) in values" :key="id">
                                    <td>{{ value.nom }}</td>
                                    <td>{{ value.description }}</td>
                                    <td>{{ value.categorie_id }}</td>
                                    <td>{{ value.poids }}</td>
                                    <td>{{ value.garantie_duree }}</td>
                                    <td>{{ value.fournisseur_id }}</td>
                                    <td>{{ value.etat }}</td>
                                    <td>{{ value.prix_liste }}</td>
                                    <td>{{ value.prix_mini }}</td>
                                    <td>{{ value.url_catalogue }}</td>
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
        name: "Produit",

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
                    url: "http://127.0.0.1:3000/produit_infos"
                })
                    .then(rep => {
                        this.statusCode = rep.status
                        this.values = rep.data;
                        this.$forceUpdate();
                        this.$emit('setLoader', false)
                    })
                    .catch(err => {
                        if(this.retry >= 3)
                            this.$emit('setLoader', false)
                        alertToast('Erreur', err, 'error', this)
                    });
            },
            displayForm(id) {
                
                let produit = {}
                let t = id === 0? 'Nouveau' : 'Modification d\'un'

                this.$swal({
                    title: `${t} produit`,
                    html:
                        '<form><div class="form-group"><input id="nom" type="text" class="form-control" placeholder="Nom"></div>' +
                        '<div class="form-group"><input id="description" type="text" class="form-control" placeholder="Description"></div>' +
                        '<div class="form-group"><input id="garantie_duree" type="text" class="form-control" placeholder="Duree de garantie"></div></div>' +
                        '<div class="form-row"><div class=" form-group col"><input id="categorie_id" type="number" class="form-control" placeholder="Categorie ID"></div>' +
                        '<div class="form-group col"><input id="poids" type="number" class="form-control" placeholder="Poids"></div>' +
                        '<div class="form-group col"><input id="fournisseur_id" type="number" class="form-control" placeholder="Fournisseur ID"></div></div>' +
                        '<div class="form-row"><div class=" form-group col"><input id="etat" type="text" class="form-control" placeholder="Etat"></div>' +
                        '<div class="form-group col"><input id="prix_liste" type="number" class="form-control" placeholder="Prix liste"></div>' +
                        '<div class="form-group col"><input id="prix_mini" type="number" class="form-control" placeholder="Prix mini"></div></div>' +
                        '<div class="form-group"><input id="url_catalogue" type="text" class="form-control" placeholder="URL Catalogue"></div></form>',
                    focusConfirm: false,
                    onRender: () => {
                        if(id != 0) {
                            axios({
                                method: "get",
                                url: `http://127.0.0.1:3000/produit_infos/${id}`
                            })
                                .then(rep => {
                                    this.statusCode = rep.status                                    
                                    document.getElementById('nom').value = rep.data.nom
                                    document.getElementById('description').value = rep.data.description
                                    document.getElementById('categorie_id').value = rep.data.categorie_id
                                    document.getElementById('poids').value = rep.data.poids
                                    document.getElementById('garantie_duree').value = rep.data.garantie_duree
                                    document.getElementById('fournisseur_id').value = rep.data.fournisseur_id
                                    document.getElementById('etat').value = rep.data.etat
                                    document.getElementById('prix_liste').value = rep.data.prix_liste
                                    document.getElementById('prix_mini').value = rep.data.prix_mini
                                    document.getElementById('url_catalogue').value = rep.data.url_catalogue
                                })
                                .catch(err => {
                                    alertToast('Erreur', err, 'error', this)
                                });
                        }
                    },
                    preConfirm: () => {
                        let topOk = true
 
                        produit.description = document.getElementById('description').value

                        if(document.getElementById('poids').value) {
                            produit.poids = document.getElementById('poids').value
                        }

                        produit.garantie_duree = document.getElementById('garantie_duree').value

                        if(document.getElementById('prix_mini').value) {
                            produit.prix_mini = document.getElementById('prix_mini').value
                        }

                        produit.url_catalogue = document.getElementById('url_catalogue').value

                        if (document.getElementById('nom').value) {
                            produit.nom = document.getElementById('nom').value
                        } else {
                            topOk = false
                            this.$swal.showValidationMessage('Nom obligatoire.')
                        }

                        if (document.getElementById('categorie_id').value) {
                            produit.categorie_id = document.getElementById('categorie_id').value
                        } else {
                            topOk = false
                            this.$swal.showValidationMessage('Catégorie ID obligatoire.')
                        }

                        if (document.getElementById('fournisseur_id').value) {
                            produit.fournisseur_id = document.getElementById('fournisseur_id').value
                        } else {
                            topOk = false
                            this.$swal.showValidationMessage('Fournisseur ID obligatoire.')
                        }

                        if (document.getElementById('etat').value) {
                            produit.etat = document.getElementById('etat').value
                        } else {
                            topOk = false
                            this.$swal.showValidationMessage('Etat obligatoire.')
                        }

                        if (document.getElementById('prix_liste').value) {
                            produit.prix_liste = document.getElementById('prix_liste').value
                        } else {
                            topOk = false
                            this.$swal.showValidationMessage('Prix Liste obligatoire.')
                        }

                        if(topOk) {
                            
                            if(id != 0) {
                                axios({
                                    method: "put",
                                    url: `http://127.0.0.1:3000/produit_infos/${id}`,
                                    data: produit
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
                                    url: `http://127.0.0.1:3000/produit_infos`,
                                    data: produit
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
            },
            deleteRow(id) {
                axios({
                    method: "delete",
                    url: `http://127.0.0.1:3000/produit_infos/${id}`
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