const Chart = require('chart.js');

const ctxPolarArea = document.getElementById('myChartPolarArea').getContext('2d');

const myChartPolarArea = new Chart(ctxPolarArea, {
    type: 'polarArea',
    data: {
        labels: [
            'Html',
            'JS',
            'SQL',
            'React',
            'CSS'
          ],
          datasets: [{
            label: 'Technical skills',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
          }]
    }
});
