var header = document.querySelector('header');
var section = document.querySelector('section');
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
    var heroes = jsonObj['temples'];

    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myList1 = document.createElement('ul');
        var myList2 = document.createElement('ul');

        myH3.textContent = heroes[i].name;
        myPara1.textContent = heroes[i].address;
        myPara2.textContent = heroes[i].number;
        myList1.textContent = "Temple Schedule:"

        var superPowers = heroes[i].schedule;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myList2.textContent = "Closures:"
        var closures = heroes[i].closures;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }


        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList1);
        myArticle.appendChild(myList2);

        section.appendChild(myArticle);
    }
}