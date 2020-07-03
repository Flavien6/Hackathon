<script>
    import {Bar, Line, Radar, Pie, Doughnut, PolarArea, Bubble, Scatter} from 'vue-chartjs'

    export let BarGraph = {
        name: "BarGraph",
        extends: Bar,
        props: [
            'data',
            'options'
        ],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }

    export let LineGraph = {
        name: "LineGraph",
        extends: Line,
        props: [
            'data',
            'options'
        ],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }

    export let RadarGraph = {
        name: "RadarGraph",
        extends: Radar,
        props: [
            'data',
            'options'
        ],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }

    export let PieGraph = {
        name: "PieGraph",
        extends: Pie,
        props: [
            'data',
            'options'
        ],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }

    export let DoughnutGraph = {
        name: "DoughnutGraph",
        extends: Doughnut,
        props: [
            'data',
            'options'
        ],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }

    export let PolarAreaGraph = {
        name: "PolarAreaGraph",
        extends: PolarArea,
        props: [
            'data',
            'options'
        ],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }

    export let BubbleGraph = {
        name: "BubbleGraph",
        extends: Bubble,
        props: [
            'data',
            'options'
        ],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }

    export let ScatterGraph = {
        name: "ScatterGraph",
        extends: Scatter,
        props: [
            'data',
            'options'
        ],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }

    export default {LineGraph, BarGraph, RadarGraph, PieGraph, DoughnutGraph, PolarAreaGraph, BubbleGraph, ScatterGraph}
</script>