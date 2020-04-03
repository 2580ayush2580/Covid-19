const xDates = []
const yPatients = []
chartIt();
async function chartIt() {
    await getData();
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xDates,
            datasets: [{
                label: 'Corona Patients',
                data: yPatients,
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

    const response = await fetch('https://api.covid19api.com/dayone/country/india/status/confirmed/live')
    let data = await response.json()
    for (var i = 0; i < data.length; i++) {

        const date1 = data[i].Date
        const date2 = date1.slice(0, 10)
        xDates.push(date2)
    }
    for (var i = 0; i < data.length; i++) {
        yPatients.push(data[i].Cases)
    }


}