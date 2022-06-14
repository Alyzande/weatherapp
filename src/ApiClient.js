import axios from 'axios';
export class ApiClient {

    responseStatusCheck(responseObject) {
        if (responseObject.status >= 200 && responseObject.status < 300) {
            return Promise.resolve(responseObject);
        } else {
            return Promise.reject(new Error(responseObject.statusText));
        }
    }

    getItems(url) {
        return axios.get(url)
            .then(this.responseStatusCheck)
            .catch((error) => {
                console.log(error);
            });
    }

getWeather(){
    return this.getItems(`https://api.openweathermap.org/data/3.0/onecall?lat=53.38&lon=-1.47&exclude=current,minutely,hourly,alerts&units=metric&appid=10f8ebf1d0c06f8e93882e24c19e88eb`)
    //will pass it lat/lon once it works for this latlon
};

    // getAuthors(skip = 0, limit = 20) {
    //     return this.getItems(`https://api.quotable.io/authors?skip=${skip}&limit`)
    // };

    // getQuoteByAuthor(authorId) {
    //     return this.getItems(`https://api.quotable.io/quotes?authorId=${authorId}`);
    // };

    // getQuote() {
    //     return this.getItems("https://api.quotable.io/random")
    // };


}