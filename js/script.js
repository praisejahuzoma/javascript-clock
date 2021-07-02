// New-york
let newYorkTwelveHour = setInterval(function(){newYorkClock()},1000);
function newYorkClock(){ 
let newYorkdate = new Date();
let newYorktime = newYorkdate.toLocaleTimeString('en-US',{timeZone: 'America/New_York'});
document.getElementById("newYork-twelve-hour-clock").innerHTML = newYorktime;
}

// Berlin-Europe
let berlinEuropeTweentyFourHour = setInterval(function(){berlinClock()},1000);
function berlinClock(){ 
let berlinDate = new Date();
let berlinTime = berlinDate.toLocaleTimeString('de-DE',{hour12: false, timeZone: 'Europe/Berlin'});
document.getElementById("europeBerlinTwentyFourHourClock").innerHTML = berlinTime;
}

// Nigeria-abuja
let  nigeriaAbujaTwelveHour = setInterval(function(){nigeriaClock()},1000);
function nigeriaClock(){ 
let nigeriaDate= new Date();
let nigeriaTime = nigeriaDate.toLocaleTimeString('ig-NG', {timeZone:'Africa/Lagos'});
document.getElementById("NigeriaAbujaTwelveHourClock").innerHTML = nigeriaTime;
}

// Liberia-monrovia
let liberiaMonroviaTweentyFourHour = setInterval(function(){liberiaClock()},1000);
function liberiaClock(){ 
let liberiaDate = new Date();
let liberiaTime = liberiaDate.toLocaleTimeString('en-LR', {timeZone:'Africa/Monrovia'});
document.getElementById("LiberiaMonroviaTwentyHourClock").innerHTML = liberiaTime;
}

const year = new Date().getFullYear();
const yearText = document.querySelector('.year');
yearText.innerHTML = year;