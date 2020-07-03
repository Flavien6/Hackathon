<template>
  <div id="tableau">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <button type="button" class="btn" @click="displayForm(0)">
            Ajouter <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
              <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
              <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            </svg>
          </button>
          <div class="table-responsive">
            <table id="mytable" class="table table-bordred table-striped">
              <thead>
                <th>Adresse</th>
                <th>Code Postal</th>
                <th>Ville</th>
                <th>Emplacement</th>
                <th></th>
              </thead>
              
                <tbody>
                  <tr v-for="(value, id) in values" :key="id">
                    <td>{{ value.adresse }}</td>
                    <td>{{ value.code_postal }}</td>
                    <td>{{ value.ville }}</td>
                    <td>{{ value.region }} - {{ value.secteur }}</td>
                    <td>
                      <div class="modif float-left" @click="editRow(value.id)">
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
                      <div class="suppr float-left" @click="deleteRow(value.id)">
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

<style lang="scss">
$v: #42b983;
$m: #2c3e50;

.btn {
        margin: 2%;
        background: $v;
        transition: 0.5s;
        color: white;
        font-weight: bold;

        &:hover{
            transition: 0.5s;
            background-color: $m!important;
            color: $v!important;
            border-radius: 8px;
            overflow: visible;
            transform: scale(1.15);
        }
}

.table-responsive {
    margin-top: 1.5%;
    border-radius: 8px !important;
    border-radius: 50px;
    box-shadow: 8px 8px 12px #cbcbcb, -8px -8px 12px #ffffff;
    margin-bottom: 2%;

  table {
    margin-bottom: 0;
    padding-bottom: 3%;

    thead {
      background: $m;
      th {
        color: $v;
      }
    }

    .scrollableTbody{
      width: 100%;
      overflow: auto;
      height: 450px;
    }

    tbody {

      tr {
        td {
          .modif {
            color: #f0ad4e;
            width: 35px;
            height: 35px;
            border: 1px solid #f0ad4e;
            border-radius: 8px;
            transition: 0.5s;
            margin-right: 10%;

            svg {
              margin-top: 50%;
              transform: translate(50%, -50%);
              margin-right: 50%;
            }

            &:hover {
              transition: 0.5s;
              background-color: #f0ad4e;
              border-radius: 8px;
              overflow: visible;
              color: white;
              transform: scale(1.15);
              cursor: pointer;
            }
          }
          /*Style de la poubelle pour supprimer les personnes de la liste */
          .suppr {
            color: #ff4444;
            width: 35px;
            height: 35px;
            border: 1px solid #ff4444;
            border-radius: 8px;            
            transition: 0.5s;
            
            svg {
              margin-top: 50%;
              transform: translate(50%, -50%);
              margin-right: 50%;
            }

            &:hover {
              transition: 0.5s;
              background-color: #ff4444;
              border-radius: 8px;
              overflow: visible;
              color: white;
              transform: scale(1.15);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
    import axios from "axios";
    import Chat from '@/components/Chat.vue'
    import alertToast from '@/assets/js/swal.js'

    export default {
        name: "Localisation",

        data() {
            return {
                values: [],
                statusCode: 200,
                retry: 0,
                error: ""
            };
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
                    url: "http://127.0.0.1:3000/localisations"
                })
                    .then(rep => {
                        this.statusCode = rep.status
                        this.values = rep.data;

                        for (let val in this.values) {
                            axios({
                                method: "get",
                                url: `http://127.0.0.1:3000/regions/${this.values[val].region_id}`
                            })
                                .then(rep => {
                                    this.statusCode = rep.status
                                    this.values[val].region = rep.data.nom;
                                    axios({
                                        method: "get",
                                        url: `http://127.0.0.1:3000/secteurs/${rep.data.secteur_id}`
                                    })
                                        .then(rep => {
                                            this.values[val].secteur = rep.data.nom;
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
                
                let localisation = {}
                let t = id === 0? 'Nouvelle' : 'Modification d\'une'
                let regions
                let secteurs
                let optionRegSec

                axios({
                    method: "get",
                    url: `http://127.0.0.1:3000/secteurs`
                })
                    .then(rep => {
                        this.statusCode = rep.status
                        secteurs = rep.data;
                        axios({
                            method: "get",
                            url: `http://127.0.0.1:3000/regions`
                        })
                            .then(rep => {
                                this.statusCode = rep.status
                                regions = rep.data
                                regions.forEach(e => {
                                    secteurs.forEach(cE => {
                                        if(e.secteur_id === cE.id) {
                                            optionRegSec += `<option value="${e.id}">${cE.nom} - ${e.nom}</option>`
                                        }
                                    })
                                })

                                this.$swal({
                                    title: `${t} localisation`,
                                    html:
                                        '<form><div class="form-group"><input id="adresse" class="form-control" placeholder="Adresse"></div>' +
                                        '<div class="form-row"><div class=" form-group col"><input id="code_postal" type="number" class="form-control" placeholder="Code Postal"></div> '+
                                        '<div class="form-group col"><input id="ville" type="text" class="form-control" placeholder="Ville"></div></div>' + 
                                        `<div class="form-group"><select id="emplacement" class="form-control"><option selected value="0">Sélection d'un emplacement</option>${optionRegSec}</select></div></form>`,
                                    focusConfirm: false,
                                    onRender: () => {
                                        if(id != 0) {
                                            axios({
                                                method: "get",
                                                url: `http://127.0.0.1:3000/localisations/${id}`
                                            })
                                                .then(rep => {
                                                    this.statusCode = rep.status
                                                    document.getElementById('adresse').value = rep.data.adresse
                                                    document.getElementById('code_postal').value = rep.data.code_postal
                                                    document.getElementById('ville').value = rep.data.ville
                                                    document.getElementById('emplacement').value = rep.data.region_id
                                                })
                                                .catch(err => {
                                                    alertToast('Erreur', err, 'error', this)
                                                });
                                        }
                                    },
                                    preConfirm: () => {
                                        let topOk = true

                                        if (document.getElementById('adresse').value) {
                                            localisation.adresse = document.getElementById('adresse').value
                                        } else {
                                            topOk = false
                                            this.$swal.showValidationMessage('Adresse obligatoire.')
                                        }

                                        if (document.getElementById('code_postal').value) {
                                            localisation.code_postal = document.getElementById('code_postal').value
                                        } else {
                                            topOk = false
                                            this.$swal.showValidationMessage('Code postal obligatoire.')
                                        }

                                        if (document.getElementById('ville').value) {
                                            localisation.ville = document.getElementById('ville').value
                                        } else {
                                            topOk = false
                                            this.$swal.showValidationMessage('Ville obligatoire.')
                                        }

                                        if (document.getElementById('emplacement').value != 0) {
                                            localisation.region_id = document.getElementById('emplacement').value
                                        } else {
                                            topOk = false
                                            this.$swal.showValidationMessage('Emplacement obligatoire.')
                                        }

                                        if(topOk) {
                                            if(id != 0) {
                                                axios({
                                                    method: "put",
                                                    url: `http://127.0.0.1:3000/localisations/${id}`,
                                                    data: localisation
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
                                                    url: `http://127.0.0.1:3000/localisations`,
                                                    data: localisation
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
                            });
                    })
                    .catch(err => {
                        alertToast('Erreur', err, 'error', this)
                    });
            },
            deleteRow(id) {
                axios({
                    method: "delete",
                    url: `http://127.0.0.1:3000/localisations/${id}`
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
    };
</script>
