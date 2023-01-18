const request = require('request')
const url = 'https://api.open-meteo.com/v1/forecast?latitude=28.71&longitude=77.22'

request({ url: url, json: true}, (error, response) => {
    console.log(response.body)
})