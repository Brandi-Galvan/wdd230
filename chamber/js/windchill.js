var tempF = parseFloat(document.getElementById('temperature').innerHTML);
var wspeed = parseFloat(document.getElementById('windspeed').innerHTML);
var wchill = 35.74+0.6215*tempF-35.75*(wspeed**0.16)+0.4275*tempF*(wspeed**(0.16));
if (tempF > 50 || wspeed < 3) {
    document.getElementById('windchill').textContent = "N/A";

}
else {
    var strChill = wchill.toFixed(0) + "º F";
    document.getElementById('windchill').textContent = strChill;
}
