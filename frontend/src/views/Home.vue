<template>
    <div class="home">
        <!--<img alt="The logo" src="@/assets/MakeLogoGreatAgain.png">
        <HelloWorld msg="C'est ma bite"/>-->
        <BarGraph class="chart" v-show="BarData.active" :data="BarData" :options="chartData.options" />
        <div><button @click="setDisplay" class="btn">Afficher les autres graphiques</button></div>
        <div v-show="displayGraph">
            <h1>Modèle de graphique disponible</h1>
            <LineGraph class="chart" :data="chartData.data" :options="chartData.options" />
            <RadarGraph class="chart" :data="chartData.data" :options="chartData.options" />
            <PieGraph class="chart" :data="chartData.data" :options="chartData.options" />
            <DoughnutGraph class="chart" :data="chartData.data" :options="chartData.options" />
            <PolarAreaGraph class="chart" :data="chartData.data" :options="chartData.options" />
            <BubbleGraph class="chart" :data="chartData.special" :options="chartData.options" />
            <ScatterGraph class="chart" :data="chartData.special" :options="chartData.options" />
        </div>
    </div>
</template>

<style lang="scss">
.home {
    .chart {
        height: 60vh;
        width: 60vh;
        margin: 1%;
        padding: 1%;
        border-radius: 8px;
        box-shadow: 8px 8px 12px #cbcbcb, -8px -8px 12px #ffffff;
        display: inline-block;
    }

    .btn {
        margin: 2%;
        margin-bottom: 0;
        background: #42b983;
        transition: 0.5s;
        color: white;
        font-weight: bold;

        &:hover{
            transition: 0.5s;
            background-color: #2c3e50!important;
            color: #42b983!important;
            border-radius: 8px;
            overflow: visible;
            transform: scale(1.15);
        }
    }
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
    import { LineGraph, BarGraph, RadarGraph, PieGraph, DoughnutGraph, PolarAreaGraph, BubbleGraph, ScatterGraph } from '../components/Chart.vue'
    import chartData from '../assets/js/chartData.js'
    import axios from 'axios'

    export default {
        name: 'Home',
        data() {
            return {
                chartData,
                BarData: {
                    active: false,
                    datasets: [{
                        label: 'Nombre de commande',
                        data: [],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 8, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ]
                    }],
                },
                displayGraph: false
            }
        },
        components: {
            // HelloWorld
            LineGraph,
            BarGraph,
            RadarGraph,
            PieGraph,
            DoughnutGraph,
            PolarAreaGraph,
            BubbleGraph,
            ScatterGraph
        },
        mounted() {
            this.getBarData()
        },
        methods: {
            getBarData() {
                axios({
                    method: "get",
                    url: `http://127.0.0.1:3000/commandes/`,
                    responseType: 'json',
                })
                    .then((resp) => {
                        let commandes = resp.data
                        axios({
                            method: "get",
                            url: `http://127.0.0.1:3000/employes`,
                            responseType: 'json',
                        })
                            .then((resp) => {

                                for(let employe in resp.data) {
                                    //console.log(resp.data[employe].nom)
                                    this.BarData.labels.push(resp.data[employe].nom + " " + resp.data[employe].prenom)
                                    let commandeVendeur = commandes.filter(commande => {
                                        if(commande.vendeur_id == resp.data[employe].id) {
                                            return commande
                                        }
                                    })
                                    //console.log(commandeVendeur.length)
                                    this.BarData.datasets[0].data.push(commandeVendeur.length)
                                    //console.log(this.BarData.datasets[0].data)
                                }
                                this.BarData.active = true
                                //console.log(this.BarData.labels)
                            })
                            .catch(err => {
                                console.log(err)
                            });
                    })
                    .catch(err => {
                        console.log(err)
                    });
                
            },
            setDisplay() {this.displayGraph = !this.displayGraph}
        }
    }
</script>
