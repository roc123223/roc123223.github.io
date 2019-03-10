var temperature = parseInt(document.getElementById("temp").innerHTML);
var windSpeed = parseInt(document.getElementById("windSpeed").innerHTML);

var sumTest = 35.74 + (0.6215*temperature) - (35.75*Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16));

document.getElementById("output").innerHTML = "Wind chill is " + Math.round(sumTest) + " degrees.";