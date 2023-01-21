const request = require('request')
// const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=4CJKKG4BXPU5ZX7QHJHKX3RD7&contentType=json'

// request({ url: url, json: true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect')
//     }
//     else{
//         console.log(response.body.currentConditions)
//     }
    
// })
// new

// const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast.js')

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})