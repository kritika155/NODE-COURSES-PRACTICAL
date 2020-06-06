const request = require('request')

const url = 'https://api.darksky.net/forecast/a14ca451b5a7219919b4fc09f88c1d8d/37.8267,-122.4233?lang=en'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})