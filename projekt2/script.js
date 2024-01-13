
// Uppgift 1, Memory


$('.flip-card .flip-card-inner').click(function(){
  $(this).toggleClass("flip-card");
});

//Blev replaced av jQuery
/*function showHide(event) {
    
    console.log("Du klickade på kortet: " + event.target.innerText);
    
   event.target.innerText = "Valt kort";
    event.target.id = "specialKort";
    if (event.target.id == "specialKort") {
        var kortet = event.target.innerText;
        kortet.style.visibility = "visible";
        //event.target.style.visibility = "hidden";
    }
}*/
/*var kort = document.getElementsByClassName("flip-card");
for (let i = 0; i < kort.length; i++) {
    kort[i].addEventListener("click", flip);
}
var kortBack = document.getElementsByClassName("flip-card-back");
for (let i = 0; i < kort.length; i++) {
    kort[i].addEventListener("click", flip);
}*/




// Uppgift 2, Galleri


var t1;

/*function fadeIn() {
  
  document.getElementById("gallery").style.opacity += 0.1;
}

function fadeOut() {
  document.getElementById("gallery").style.opacity -= 0.1;
}
*/
function nextImg() {
  console.log("Du clickade på kortet : " + event.target.src)
  document.getElementById("gallery").src = event.target.src;
  
  document.getElementById("tomContainer").src = "../gallery/kloverkung.png";

   /*if (document.getElementById("gallery").style.opacity == 1) {
     t1 = setInterval(fadeIn, 1000)
   }
   else {
     clearInterval(t1);
     document.getElementById("gallery").style.opacity = 0;
   }*/
}

var valtKort = document.getElementsByClassName("thumb");
for (let i = 0; i < valtKort.length; i++) {

  valtKort[i].addEventListener("mouseover", nextImg)
}

//Uppgift 3, Tema sliders (DONE + BONUS)

//Checkar formatet från sliders
function checkFormat(event) {
  var rodFargIn = document.getElementById("redSlider").value;
  var rodFarg = Number(rodFargIn);
  var granFargIn = document.getElementById("greenSlider").value;
  var granFarg = Number(granFargIn);
  var blaFargIn = document.getElementById("blueSlider").value;
  var blaFarg = Number(blaFargIn);

  document.getElementById("redOut").innerText = rodFargIn;
  document.getElementById("greenOut").innerText = granFargIn;
  document.getElementById("blueOut").innerText = blaFargIn;

  var fargIhop = rodFarg + granFarg + blaFarg;
  var rodFargHex = rodFarg.toString(16);
  var granFargHex = granFarg.toString(16);
  var blaFargHex = blaFarg.toString(16);
  fargIhopHex = rodFargHex + granFargHex + blaFargHex;

  decToHex(fargIhopHex);
  hex2bin(fargIhopHex);
  hex2oct(rodFarg, granFarg, blaFarg);

  console.log("färgihop " + fargIhop + " hexihop " + fargIhopHex)
  document.getElementById("hexaOut").innerHTML = "#" + fargIhopHex;

  runOpposite(rodFarg, granFarg, blaFarg);

}
//Checkar formatet från inputboxen
function checkFormatInput(event) {
  var inputStr = event.target.previousElementSibling.value;

  if (inputStr.includes("#")) {
    hexToDecInput(inputStr);
  }
  else {
    decToHexInput(inputStr);
  }
}

function hexToDecInput(inputStr) {
  var inputCut = inputStr.substring(1);
  var inputHex = inputCut.toString(16);
  document.getElementsByTagName("article")[3].style.color = "#" + inputHex;
}

function decToHexInput(inputStr) {
  var str = inputStr;
  var [r, g, b] = str.split(',');
  var red = Number(r);
  var green = Number(g);
  var blue = Number(b);
  var redHex = red.toString(16);
  var greenHex = green.toString(16);
  var blueHex = blue.toString(16);
  console.log(r + g + b);
  var inputStrHex = redHex + greenHex + blueHex;
  document.getElementsByTagName("article")[3].style.color = "#" + inputStrHex;
  return inputStrHex;
}

function runOpposite(rodFarg, granFarg, blaFarg) {
  var rodFargOpp = '255' - rodFarg;
  var rodFargOppHex = rodFargOpp.toString(16);
  var granFargOpp = '255' - granFarg;
  var granFargOppHex = granFargOpp.toString(16);
  var blaFargOpp = '255' - blaFarg;
  var blaFargOppHex = blaFargOpp.toString(16);
  hexOpp2oct(rodFargOpp, granFargOpp, blaFargOpp);
  document.getElementById("oppHexaOut").innerHTML = "#" + rodFargOppHex + granFargOppHex + blaFargOppHex;

  document.getElementsByTagName("article")[3].style.backgroundColor = "#" + rodFargOppHex + granFargOppHex + blaFargOppHex;
  var oppHexIhop = rodFargOppHex + granFargOppHex + blaFargOppHex;
  console.log("this is opphexihop: " + oppHexIhop);
  hexOpp2bin(oppHexIhop);
  
}

function decToHex(str) {
  //var inputNr = Number(str);
  //var hex = inputNr.toString(16);

  console.log("this is the color of the background: " + str);
  document.getElementsByTagName("body")[0].style.backgroundColor = "#" + str;
}
//BINÄR
function hex2bin(fargIhopHex) {
  var binar = ("00000000" + (parseInt(fargIhopHex, 16)).toString(2)).substr(-24);
  document.getElementById("binarOut").innerHTML = binar;
}

function hexOpp2bin(fargIhopHex) {
  var binar = ("00000000" + (parseInt(fargIhopHex, 16)).toString(2)).substr(-24);
  document.getElementById("binarOppOut").innerHTML = binar;
}
//----------------------------------------------------

//OCTAL
function hex2oct(rodFarg, granFarg, blaFarg) {
  var rodOct = rodFarg.toString(8);
  var granOct = granFarg.toString(8);
  var blaOct = blaFarg.toString(8);
  var octal = rodOct + granOct + blaOct;

  document.getElementById("octaOut").innerHTML = octal;
}

function hexOpp2oct(rodFargOpp, granFargOpp, blaFargOpp) {
  var rodOppOct = rodFargOpp.toString(8);
  var granOppOct = granFargOpp.toString(8);
  var blaOppOct = blaFargOpp.toString(8);
  var octalOpp = rodOppOct + granOppOct + blaOppOct;

  document.getElementById("octaOppOut").innerHTML = octalOpp;
}
//-----------------------------------------------------------

document.getElementById("temaButton").addEventListener("click", checkFormatInput);
document.getElementById("redSlider").addEventListener("input", checkFormat);
document.getElementById("greenSlider").addEventListener("input", checkFormat);
document.getElementById("blueSlider").addEventListener("input", checkFormat);


//Uppgift 4, JQuery och GASP (DONE)

$(document).ready(function () {
  $("blueSlider").click(function () {
    $(this).animate({ fontSize: '100px' }, "slow")
  });
  $('#redSlider').hover(function () {
    $(this).animate({ width: '300px' })
  });
  $('#blueSlider').hover(function () {
    $(this).animate({ width: '300px' })
  });
  $('#greenSlider').hover(function () {
    $(this).animate({ width: '300px' })
  });
  $('h2').hover(function () {
    $(this).css({
      color: 'magenta',
      fontSize: '33px',
      textDecoration: 'underline',
  });
  });
});

$(document).ready(function(){
  $("#visaGomma").click(function(){
    $("#vG").toggle();
  });
});

$(document).ready(function(){
  $("#fadeBut").click(function(){
    $("#fade").fadeToggle("slow");
  });
});

$(document).ready(function(){
  $("#slideBut").click(function(){
    $("#slide").slideToggle("slow");
  });
});



//Uppgift 5, Cookies

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  var cookieStr = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log(cookieStr);
  //TODO: Vi kan ju inte lita på att enda kakan är just username
  //idee gör en for loop och sedan gå egenom arrayn och kolla includes?
  document.cookie = cookieStr;
}

function getCookie() {
  var cookieArray = document.cookie.split("; ");
  console.log(cookieArray);
  return cookieArray;
}

function loggaIn() {
  var user = prompt("Vad är ditt användarnamn?: ");
  setCookie("username", user, 2);
  //Spara även i local storage
  localStorage.setItem("username", user);
  checkCookie();
}
$("#login").click(loggaIn); //jQuery eventlistener
//Kolla ifall det är x som loggar in och visa hemlis endast då

function checkCookie() {
  var user = getCookie();
  console.log("Användaren heter: " + user);
  /*for (let i = 0; i < cookieArray.length; i++) {
    if (cookieArray[i].includes("username")) {
      if (user == "username=karim") {
        $("#hemlis").show();
      }
    }
  }*/
  if (user.includes("username=zinned")) {
    $("#hemlis").show()
  }
  document.getElementById("cookieOut").innerText = "Här är cookien du gjorde: " + document.cookie
}
window.onload = function () { checkCookie(); }


//Uppgift 6, AJAX (DONE + BONUS)

function loadDocKung() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajaxKungar").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "kungar.txt", true);
  xhttp.send();
}
$("#laddaDataKungar").click(loadDocKung);

function loadDocDrottning() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajaxDrottningar").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "drottningar.txt", true);
  xhttp.send();
}
$("#laddaDataQueens").click(loadDocDrottning);

function loadDocJatka() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajaxJatka").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "jatka.txt", true);
  xhttp.send();
}
$("#laddaDataJatka").click(loadDocJatka);

function loadDocS() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajaxS").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "s.txt", true);
  xhttp.send();
}
$("#laddaDataS").click(loadDocS);

function loadDocRest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajaxRest").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "rest.txt", true);
  xhttp.send();
}
$("#laddaDataRest").click(loadDocRest);

// OBS AJAX MED JQUERY FÖR BONUS POÄNG!!!

$("#laddaDataJoker").click(function () {
  $.ajax({
    url: "joker.txt", success: function (result) {
      $("#ajaxJoker").html(result);
    }
  });
});

$("#laddaDataWikipedia").click(function () {
  $.ajax({
    url: "wikipedia.txt", success: function (result) {
      $("#ajaxWikipedia").html(result);
    }
  });
});




//Uppgift 7, JSON (DONE + BONUS)
//OBS ip-API data syns ändast till http och inte till https!
function loadDocJSON() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      //skriv ut datan från json objektet i divven
      //document.getElementById("ajax").innerHTML = json.posts[0].text;
      document.getElementById("jsonCountry").innerHTML = "Du befinner dig i:<br> " + json.country;
      document.getElementById("jsonCountryCode").innerHTML = "Din statskod är:<br> " + json.countryCode;
      document.getElementById("jsonTimeZone").innerHTML = "Din tidzon är:<br> " + json.timezone;

    }
  };
  xhttp.open("GET", /*obs här kan vara vadsomhelst: */"http://ip-api.com/json/", true);
  xhttp.send();
}
$("#jsonLadda").click(loadDocJSON);

// FÖR BONUS POÄNG OPENWEATHER
function loadDocJSONVader() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      //skriv ut datan från json objektet i divven
      //document.getElementById("ajax").innerHTML = json.posts[0].text;
      document.getElementById("jsonCoordLon").innerHTML = "Du befinner dig i longitud:<br> " + json.coord.lon;
      document.getElementById("jsonCoordLat").innerHTML = "Och i latitud:<br> " + json.coord.lat;
      document.getElementById("jsonVader").innerHTML = "Vädret i ditt område:<br> " + json.weather[0].main + "<br> <br> " + "Beskrivande väder:<br> " + json.weather[0].description;
      document.getElementById("jsonTryck").innerHTML = "Trycket i ditt område:<br> " + json.main.pressure + " hPa";
      document.getElementById("jsonFukt").innerHTML = "Fuktigheten i ditt område:<br> " + json.main.humidity + " %";

    }
  };
  xhttp.open("GET", /*obs här kan vara vadsomhelst: */"https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=f72ec7cac46a9c32e7fdc1f9a16db405", true);
  xhttp.send();
}
$("#jsonLaddaVader").click(loadDocJSONVader);

//Lite spicy widget

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 11, cityid: '658225', appid: 'f72ec7cac46a9c32e7fdc1f9a16db405', units: 'metric', containerid: 'openweathermap-widget-11', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();


//Uppgift 8, Charts (DONE)

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Rogue', 4],
    ['Mage', 3],
    ['Warrior', 0.5],
    ['Warlock', 2],
    ['Shaman', 1]
  ]);

  // Set chart options
  var options = {
    'title': 'What class i play most in HearthStone',
    'width': 400,
    'height': 300,
    is3D: true,
    backgroundColor: 'black',
    legendTextStyle: { color: 'white' },
    titleTextStyle: { color: 'white' },
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChartGauge);

function drawChartGauge() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Memory', 80],
    ['CPU', 55],
    ['Network', 68]
  ]);

  var options = {
    width: 400, height: 120,
    redFrom: 90, redTo: 100,
    yellowFrom: 75, yellowTo: 90,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_gauge'));

  chart.draw(data, options);

  setInterval(function () {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 13000);
  setInterval(function () {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 5000);
  setInterval(function () {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 26000);
}


google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartDonut);
function drawChartDonut() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Frontend', 11],
    ['Eat', 2],
    ['Also frontend', 2],
    ['Worship Dennis', 2],
    ['No Sleep Only Frontend', 7]
  ]);

  var options = {
    title: 'My Daily Activities',
    pieHole: 0.6,
    backgroundColor: 'black',
    legendTextStyle: { color: 'white' },
    titleTextStyle: { color: 'white' },
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}


//highchart
Highcharts.setOptions({
  chart: {
    backgroundColor: 'yellow',
    borderWidth: 2,

    plotShadow: true,
    plotBorderWidth: 1
  }
});

Highcharts.chart('containerHighchart', {
  chart: {
    type: 'column',
    backgroundColor: 'black',


  },
  title: {
    text: 'Projekt 2 svårighet'
  },

  xAxis: {

    categories: [
      'Uppg. 1',
      'Uppg. 2',
      'Uppg. 3',
      'Uppg. 4',
      'Uppg. 5',
      'Uppg. 6',
      'Uppg. 7',
      'Uppg. 8',

    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Uppgiftens svårighet'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Svårighet',
    data: [9, 5, 6, 4, 5, 2, 3, 5]

  }]
});


//ChartJS 

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Tonfisk', 'Kyckling', 'Ris', 'Spaghetti', 'Whey', 'Alkohol'],
    datasets: [{
      label: 'Bästa maten för massiva gains',
      data: [20, 20, 4, 10, 18, -20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});