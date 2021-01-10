import axios from 'axios'

var key = "d676f431204621263a5c39a6c40247e4"

export default {
    getCurrentWeather(cityName){
        console.log("fetching current weather for " + cityName)
        return axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`)
            .then(response => {
                console.log("response")
                console.log(response)
                return response;
            })
            .catch(error => {
                console.log(error)
            })
    },
    getCurrentWeatherFromId(cityId, cityName){
        console.log("fetching current weather for " + cityName, cityId)
        return axios
            .get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}&units=metric`)
            .then(response => {
                console.log("response")
                console.log(response)
                return response;
            })
            .catch(error => {
                console.log(error)
            })
    },
    getWeatherForcast(cityId, cityName) {
        console.log("fetching weather forcast for " + cityName, cityId)
        return axios
            .get(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${key}&units=metric`)
            .then(response => {
                console.log("response")
                console.log(response)
                return response;
            })
            .catch(error => {
                console.log(error)
            })
    }
}