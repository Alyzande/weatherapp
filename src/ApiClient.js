import axios from 'axios';
export class ApiClient {

    responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300) {
            return Promise.resolve(responseObject);
        } else {
            return Promise.reject(new Error(responseObject.statusText));
        }
    }

    getWeatherList(url) {
        return axios.get(url)
            .then(this.responseStatusCheck)
            .catch((error) => {
                console.log(error);
            });
    }

    getWeather(){
        return this.getWeatherList("https://api.openweathermap.org/data/2.5/onecall?lat=53.382969&lon=-1.4659&exclude=hourly,minutely&units=metric&appid=10f8ebf1d0c06f8e93882e24c19e88eb")

    }


}