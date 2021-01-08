import axios from 'axios'

var key = "d676f431204621263a5c39a6c40247e4"

export default {
    getCurrentWeather(city){
        console.log("fetching current weather")
        return axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
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