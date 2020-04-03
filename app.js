const request = require('request')
var options = {
    method: 'GET',
    url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
    qs: { country: 'india' },
    headers: {
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'x-rapidapi-key': 'f12304b30cmshe413e239c02e9a8p128362jsn0932be9dc632'
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});