const Chart = require('chart.js');

const ctxDoughnut = document.getElementById('myChartDoughnut').getContext('2d');

const myChartDoughnut = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
        labels: ['Critical thinking skills', 'Organizational skills', 'Resourcefulness'],
        datasets: [{
            label: 'Soft skills',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
            
        }]
    }
});




