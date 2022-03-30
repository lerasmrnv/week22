const Chart = require('chart.js');

const ctxScatter = document.getElementById('myChartScatter').getContext('2d');

const myChartScatter = new Chart(ctxScatter, {
    type: 'scatter',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April'
          ],
          datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
          }, {
            type: 'line',
            label: 'Line Dataset',
            data: [20, 30, 20, 15],
            fill: false,
            borderColor: 'rgb(54, 162, 235)'
          }]
    }
});