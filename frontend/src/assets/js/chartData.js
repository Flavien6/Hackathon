const nbValues = 10;

function rand() {
    return Math.random() * 100;
}

function randomData(xy) {
    let array = []
    for(let i = 0; i < nbValues; i++) {
        if(xy)
            array.push({x:rand(), y:rand(), r:rand()})
        else array.push(rand())
    }
    return array
}

const labels = [
"Harry",
"Ross",
"Bruce",
"Cook",
"Carolyn",
"Morgan",
"Albert",
"Walker",
"Randy",
"Reed",
"Larry",
"Barnes",
"Lois",
"Wilson",
"Jesse",
"Campbell",
"Ernest",
"Rogers",
"Theresa",
"Patterson",
"Henry",
"Simmons",
"Michelle",
"Perry",
"Frank",
"Butler",
"Shirley",
"Brooks",
"Rachel",
"Edwards",
"Christopher",
"Perez",
"Thomas",
"Baker",
"Sara",
"Moore",
"Chris",
"Bailey",
"Roger",
"Johnson",
"Marilyn",
"Thompson",
"Anthony",
"Evans",
"Julie",
"Hall",
"Paula",
"Phillips",
"Annie",
"Hernandez",
"Dorothy",
"Murphy",
"Alice",
"Howard",
"Ruth",
"Jackson",
"Debra",
"Allen",
"Gerald",
"Harris",
"Raymond",
"Carter",
"Jacqueline",
"Torres",
"Joseph",
"Nelson",
"Carlos",
"Sanchez",
"Ralph",
"Clark",
"Jean",
"Alexander",
"Stephen",
"Roberts",
"Eric",
"Long",
"Amanda",
"Scott",
"Teresa",
"Diaz",
"Wanda",
"Thomas"
]

function randomLabels() {
    let array = []
    for(let i = 0; i < nbValues; i++) {
        array.push(labels[Math.floor(Math.random()*labels.length)])
    }
    return array
}

const colors = [
    'rgba(255, 99, 132, $alpha)',
    'rgba(54, 162, 235, $alpha)',
    'rgba(255, 206, 86, $alpha)',
    'rgba(75, 192, 192, $alpha)',
    'rgba(153, 102, 255, $alpha)',
    'rgba(255, 159, 64, $alpha)',
]

function randomColor() {
    let colorsObj = {}
    colorsObj.back = []
    colorsObj.border = []
    for(let i = 0; i < nbValues; i++) {
        colorsObj.back.push(colors[Math.floor(Math.random()*colors.length)].replace(/\$alpha/gi, '0.2'))
        colorsObj.border.push(colorsObj.back[i].replace(/0.2/gi, '1'))
    }
    return colorsObj
}
6
const CouleurAlea = randomColor()

let data = {
    labels: randomLabels(),
    datasets: [{
        label: 'Label ' + labels[Math.floor(Math.random()*labels.length)],
        data: randomData(),
        backgroundColor: CouleurAlea.back/*[
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 8, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ]*/,
        borderColor: CouleurAlea.border/*[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ]*/
    }]
}

let special = {
    labels: randomLabels(),
    datasets: [{
        label: 'Label ' + labels[Math.floor(Math.random()*labels.length)],
        data: randomData(true),
        backgroundColor: CouleurAlea.back/*[
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 8, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ]*/,
        borderColor: CouleurAlea.border/*[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ]*/
    }]
}

let options = {
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        maintainAspectRatio:false
    }
}

export default {data, options, special}