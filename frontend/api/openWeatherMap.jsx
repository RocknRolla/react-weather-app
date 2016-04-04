const axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=81e0b2a962ab5b3559ec43fc8eb3c84f&units=metric';

let getTemp = function (location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((response) => {
        if (response.data.cod && response.data.message) {
            throw new Error(response.data.message);
        }
        return response.data.main.temp;
    }).catch((error) => {
        throw new Error(error.data.message);
    });
};

module.exports = { getTemp };