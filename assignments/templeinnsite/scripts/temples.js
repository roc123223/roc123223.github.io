
var section = document.querySelector('section');
//var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
var requestURL = 'https://roc123223.github.io/assignments/templeinnsite/JSON/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var superHeroes = request.response;
    showHeroes(superHeroes);
}

function showHeroes(jsonObj) {

    var temples = jsonObj['temples'];

    for (var i = 0; i < temples.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('h3');
        var myPara4 = document.createElement('h3');
        var myList1 = document.createElement('ul');
        var myList2 = document.createElement('ul');

        myH2.textContent = temples[i].name;
        myPara1.textContent = temples[i].address;
        myPara2.textContent = 'Phone Number: ' + temples[i].number;
        myPara3.textContent = 'Schedule:';

        var schedule = temples[i].schedule;
        for (var j = 0; j < schedule.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = schedule[j];
            myList1.appendChild(listItem);
        }

        myPara4.textContent = 'Closures: ';
        var closures = temples[i].closures;
        for (var j = 0; j < closures.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = closures[j];
            myList2.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList1);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myList2);

        section.appendChild(myArticle);
    }
}