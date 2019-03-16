var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var allTowns = request.response;
    showTowns(allTowns);
}

function showTowns(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0, j; i < 3; i++) {
        switch (i) {
            case 0: j = 1;
            break;
            case 1: j = 4;
            break;
            case 2: j = 5;
            break;
        }
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = towns[j].name;
        myPara1.textContent = '"' + towns[j].motto + '"';
        myPara2.textContent = 'Year Founded: ' + towns[j].yearFounded;
        myPara3.textContent = 'Current Population: ' + towns[j].currentPopulation;
        myPara4.textContent = 'Average Rainfall: ' + towns[j].averageRainfall;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}