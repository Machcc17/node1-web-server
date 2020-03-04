const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e2f352903de2c4e1d10ee7837ef31508/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const curr = response.body.currently
            const today = response.body.daily.data            
            callback(undefined, today[0].summary + ' It is currently ' + curr.temperature + ' degrees out. There is a ' + curr.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast