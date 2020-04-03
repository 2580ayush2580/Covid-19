async function getData() {

    const response = await fetch('https://api.covid19india.org/data.json')
    let data = await response.json()
    console.log(data)
    for (var i = 0; i < data.statewise.length; i++) {
        document.querySelector('#aa' + i + '1').textContent = data.statewise[i].state
        document.querySelector('#aa' + i + '2').textContent = data.statewise[i].confirmed
        document.querySelector('#aa' + i + '3').textContent = data.statewise[i].recovered

        document.querySelector('#aa' + i + '4').textContent = data.statewise[i].active
        document.querySelector('#aa' + i + '5').textContent = data.statewise[i].deaths
    }
    document.querySelector('#totalindia').textContent = data.statewise[0].confirmed
    document.querySelector('#totaldeaths').textContent = data.statewise[0].deaths

}
getData()