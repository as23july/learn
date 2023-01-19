const request = require('request')
const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=4CJKKG4BXPU5ZX7QHJHKX3RD7&contentType=json'

request({ url: url, json: true}, (error, response) => {
    console.log(response.body.currentConditions)
})
// new