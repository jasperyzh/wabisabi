import "babel-polyfill";

console.log('====== START- app-async ======');




/**
 * async function method
 */

async function getWeatherAW(woeid) {

    var cors_me = 'https://cors-anywhere.herokuapp.com/'
    var metaweather_url = 'https://www.metaweather.com/api/';
    var metaweather_search = 'location/1154781/';
    var test_url = cors_me + metaweather_url;

    console.log(test_url);

    try {
        const result = await fetch(`${test_url}location/${woeid}/`);
        const data = await result.json();
        const today = data.consolidated_weather[0];
        // console.log(today);
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);

        return data;
    } catch (error) {
        alert(error);
    }
}
let dataKL;
let dataLondon;

getWeatherAW(1154781).then( data => {
    dataKL = data
    console.log('dataKL', dataKL);
});

getWeatherAW(44418).then( data => {
    dataLondon = data
    console.log('dataLondon', dataLondon);
});

// console.log

/**
 * fetch method
 */
// function getWeather() {

//     // console.log(test_url);
//     fetch(test_url)
//         .then(result => {
//             // console.log(result);
//             return result.json();
//         })
//         .then(data => {
//             // console.log(data);
//             const today = data.consolidated_weather[0];
//             console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
//         })
//         .catch(error => console.log('error'));

// }

// getWeather();

console.log('====== END- app-async ======');