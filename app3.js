const xDates2 = []
const yPatients2 = []
chartIt();
async function chartIt() {
    await getData();
    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xDates2,
            datasets: [{
                label: 'Corona Patients deaths',
                data: yPatients2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
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
                ],
                borderWidth: 1.5
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
async function getData() {

    const response = await fetch('https://api.covid19india.org/data.json')
    let data = await response.json()
    for (var i = 0; i < data.cases_time_series.length; i++) {

        const date1 = data.cases_time_series[i].date
        xDates2.push(date1)
    }
    for (var i = 0; i < data.cases_time_series.length; i++) {
        yPatients2.push(data.cases_time_series[i].totaldeceased)
    }

}