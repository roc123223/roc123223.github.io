var section = document.querySelector('section');
var requestURL = 'https://roc123223.github.io/assignments/templeinnsite/JSON/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var allTemples = request.response;
    showTemples(allTemples);
}

function showTemples(jsonObj) {
    var temples = jsonObj['temples'];

    for (var i = 0; i < temples.length; i++) {
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myList1 = document.createElement('ul');

        myH3.textContent = temples[i].name;
        myPara1.textContent = temples[i].address;
        myPara2.textContent = temples[i].number;
        myList1.textContent = "Temple Schedule:"

        var schedule = temples[i].schedule;
        for (var j = 0; j < schedule.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = schedule[j];
            myList.appendChild(listItem);
        }
        
        var myList2 = document.createElement('ul');
        myList2.textContent = "Closures:"
        var closures = temples[i].closures;
        for (var j = 0; j < closures.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = closures[j];
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