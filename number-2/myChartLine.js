const Chart = require('chart.js');

const ctxLine = document.getElementById('myChartLine').getContext('2d');

const myChartLine = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wen', 'Thy', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'tasks',
            data: [5, 8, 3, 5, 2, 3, 2],
            borderColor: 'rgb(52, 82, 146)',
            pointHoverBackgroundColor: 'rgb(146, 58, 124)',
            hoverBackgroundColor: 'green',
            tension: 0.6,
            
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});