var section = document.querySelector('section');
var requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=14b99a5ee06a11dd48101cfc081b62d3&units=imperial';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var allWeather = request.response;
    showWeather(allWeather);
}

function showWeather(jsonObj) {
    var weather = jsonObj['list'];
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');

    myPara1.textContent = 'Temperature: ' + weather[0].main.temp;
   /* myPara2.textContent = ;
    myPara3.textContent = ;
    myPara4.textContent = ; */
}
