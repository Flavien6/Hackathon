<template>
    <div class="home">
        <!--<img alt="The logo" src="@/assets/MakeLogoGreatAgain.png">
        <HelloWorld msg="C'est ma bite"/>-->
        <BarGraph class="chart" :data="chartData.data" :options="chartData.options" />
        <LineGraph class="chart" :data="chartData.data" :options="chartData.options" />
        <RadarGraph class="chart" :data="chartData.data" :options="chartData.options" />
        <PieGraph class="chart" :data="chartData.data" :options="chartData.options" />
        <DoughnutGraph class="chart" :data="chartData.data" :options="chartData.options" />
        <PolarAreaGraph class="chart" :data="chartData.data" :options="chartData.options" />
        <BubbleGraph class="chart" :data="chartData.special" :options="chartData.options" />
        <ScatterGraph class="chart" :data="chartData.special" :options="chartData.options" />
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
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
    import { LineGraph, BarGraph, RadarGraph, PieGraph, DoughnutGraph, PolarAreaGraph, BubbleGraph, ScatterGraph } from '../components/Chart.vue'
    import chartData from '../assets/js/chartData.js'

    export default {
        name: 'Home',
        data() {
            return {
                chartData
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
        }
    }
</script>
