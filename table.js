let Total = 0
let NewConfirmed = 0
let NewRecovered = 0
let TotalRecovered = 0
let NewDeaths = 0
let TotalDeaths = 0
async function getData() {

    const response = await fetch('https://api.covid19api.com/summary')
    let data = await response.json()
    console.log(data.Countries[98].Country)
    console.log(data.Countries[98].TotalConfirmed)
    console.log(data.Countries[98].NewConfirmed)
    console.log(data.Countries[98].NewRecovered)
    console.log(data.Countries[98].TotalRecovered)
    console.log(data.Countries[98].NewDeaths)
    console.log(data.Countries[98].TotalDeaths)
    for (var i = 1; i <= 227; i++) {
        document.querySelector('#a' + i + '1').textContent = data.Countries[i].Country
        document.querySelector('#a' + i + '2').textContent = data.Countries[i].TotalConfirmed
        document.querySelector('#a' + i + '3').textContent = data.Countries[i].NewConfirmed
        document.querySelector('#a' + i + '4').textContent = data.Countries[i].NewRecovered
        document.querySelector('#a' + i + '5').textContent = data.Countries[i].TotalRecovered
        document.querySelector('#a' + i + '6').textContent = data.Countries[i].NewDeaths
        document.querySelector('#a' + i + '7').textContent = data.Countries[i].TotalDeaths
    }
    for (var j = 1; j <= 227; j++) {
        Total += (data.Countries[j].TotalConfirmed)
        NewConfirmed += data.Countries[j].NewConfirmed
        NewRecovered += data.Countries[j].NewRecovered
        TotalRecovered += data.Countries[j].TotalRecovered
        NewDeaths += data.Countries[j].NewDeaths
        TotalDeaths += data.Countries[j].TotalDeaths
    }


    document.querySelector('#Country').textContent = 'Total'
    document.querySelector('#TotalCases').textContent = Total
    document.querySelector('#NewConfirmed').textContent = NewConfirmed
    document.querySelector('#NewRecovered').textContent = NewRecovered
    document.querySelector('#TotalRecovered').textContent = TotalRecovered
    document.querySelector('#NewDeaths').textContent = NewDeaths
    document.querySelector('#TotalDeaths').textContent = TotalDeaths
    document.querySelector('#TotalCases1').textContent = Total
    document.querySelector('#TotalRecovered1').textContent = TotalRecovered
    document.querySelector('#TotalDeaths1').textContent = TotalDeaths


}
getData()