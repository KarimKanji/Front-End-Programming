
//Uppg 1: Stränghantering (DONE)

function hanteraStrang(event) {

    //Firstname
    document.loanapp.firstname.addEventListener("keyup", hanteraStrang);
    document.loanapp.lastname.addEventListener("keyup", hanteraStrang);
    var firstName = document.loanapp.firstname.value;
    var lastName = document.loanapp.lastname.value;

    var firstLetter = firstName.charAt(0);
    var firstLetterCapital = firstLetter.toUpperCase();
    var irstName = firstName.slice(1);
    var FirstName = firstLetterCapital + irstName;

    //Lastname
    var lastNameFirstLetter = lastName.charAt(0);
    var lastNameFirstLetterCapital = lastNameFirstLetter.toUpperCase();
    var astName = lastName.slice(1);
    var LastName = lastNameFirstLetterCapital + astName;

    document.getElementById("namnOut").innerHTML = "Ditt namn: " + LastName + ", " + FirstName;
}

//--------------------------------------------


//Uppg 2: Sifferhantering (DONE)
function hanteraSiffra(event) {

    //console.log(event);    
    //console.log(event.key);

    //document.loanapp.loan.onkeyup = function (){hanteraSiffra(event)}
    document.loanapp.loan.addEventListener("keyup", hanteraSiffra);

    if (document.loanapp.loan.value < 0) {
        alert("Mata in ett vettigt värde, du kan int ansöka ett negativt lån!!")
    }
    else {
        var loanAmount = document.loanapp.loan.value;
        
        var commaToDot = loanAmount.replace(/,/gi, ".");
        var loanAmountCorrected = commaToDot.replace(/[^0-9.]/gi, '');
        
        var final = parseFloat(loanAmountCorrected);
        var final = Math.floor(final / 0.05) * 0.05;
        final = final.toFixed(2);

    }

    document.getElementById("loanOut").innerHTML = " Ansöker om ett lån på: " +
        final + "€";
}

//--------------------------------------------


//Uppg 3: Lånekalkylator (DONE)
function hanteraLan(event) {
    if (document.loanapp.loan.value < 0) {
        alert("Mata in ett vettigt värde, du kan int ansöka ett negativt lån!!")
    }
    else {
        var loanAmount = document.loanapp.loan.value;

        var commaToDot = loanAmount.replace(/,/gi, ".");
        var loanAmountCorrected = commaToDot.replace(/[^0-9.]/gi, '');

        var final = parseFloat(loanAmountCorrected);
        var final = Math.floor(final / 0.05) * 0.05;
        final = final.toFixed(2);
    }
    var ranta = document.loanapp.ranta.value;
    var s0 = final;
    var p = document.loanapp.ranta.value / 12;
    var n = document.loanapp.lanetid.value * 12;
    var annuitet = s0 * (p * Math.pow(1 + p, n) / (Math.pow(1 + p, n) - 1));
    var slutKostnad = annuitet * n;
    document.getElementById("rantaOut").innerHTML = "Din Ränta: " + ranta * 100 + " %";
    document.getElementById("laneTidOut").innerHTML = "Din lånetid: " + n + " Månader";
    document.getElementById("annuitetOut").innerHTML = "Din annuitet: " + annuitet.toFixed(2) + "€ / Månad";
    document.getElementById("slutKostOut").innerHTML = "Slutliga återbetald summa: " + slutKostnad.toFixed(2) + "€";
}



//--------------------------------------------


//Uppg 4: Datumhantering (DONE)
function datum(event) {

    var valdDygn = parseInt(document.loanapp.forfallodag.value);
    var d = new Date();
    var dagensDatum = new Date(Date.now());
    d.setDate(d.getDate() + valdDygn);
    var weekday = d.getDay();
    var veckoDagar = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag"
        , "Fredag", "Lördag"];

    if (d.toDateString().includes("Sun")) {
        d.setDate(d.getDate() + 1);
    }

    else if (d.toDateString().includes("Sat")) {
        d.setDate(d.getDate() + 2);
    }

    console.log("Dagens Datum: " + dagensDatum);
    console.log("Valda dygn: " + valdDygn);
    console.log("Din förfallo dag är: " + d.toDateString())

    //var d = new Date();
    //d.setDate(d.getDate() + valdDygn);
    //console.log("Din förfallo dag är: " + d)

    //console.log("Förfallodagen är: " + gettimeDag);  
    document.getElementById("forfalloOut").innerHTML = "Din förfallo dag är: " + d.toDateString();
}


//Uppg 5: Referensnummer (DONE)
function referensnr(event) {
    var inmatatNr = document.loanapp.referens.value;
    if (inmatatNr.charAt(0) == 0) {
        alert("Första siffran kan ei vara 0!")
    }
    else {
        var inmatatNr = document.loanapp.referens.value;
        inmatatNr.parseInt;
        var digit1 = inmatatNr.charAt(0);
        var digit2 = inmatatNr.charAt(1);
        var digit3 = inmatatNr.charAt(2);
        var digit4 = inmatatNr.charAt(3);
        var digit5 = inmatatNr.charAt(4);
        var digit6 = inmatatNr.charAt(5);
        var sum = (digit6 * 7) + (digit5 * 3) + (digit4 * 1) + (digit3 * 7) + (digit2 * 3) + (digit1 * 1);
        var sumRounded = Math.round(sum / 10) * 10;
        checksum = Math.abs(sumRounded - sum);
        var final = " " + digit1 + digit2 + " " + digit3 + digit4 + digit5 + digit6 + checksum;

        console.log(sum + " Checksum: " + checksum + " Ditt inmatade nummer " + inmatatNr + " Ditt referensnummer är: " + final)
        document.getElementById("referensOut").innerHTML = "Ditt referensnummer är :" + final;
    }
}


//Uppg 6: Användardata (DONE)
function getIP(json) {
    var minIp = json.ip;
    document.getElementById("ipOut").innerHTML = "Din offentliga IP adress : " + minIp;
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("locationOut").innerHTML = "Geolocation fungerar int på din browser";
    }
}

function showPosition(position) {
    document.getElementById("locationOut").innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function getBrowser() {
    var browserInfo = navigator.appVersion;
    console.log(browserInfo);
    document.getElementById("browserOut").innerHTML = "Din browser/OS info: " + browserInfo;
    var userLanguage = navigator.language;
    document.getElementById("sprakOut").innerHTML = "Ditt browser språk är: " + userLanguage;
}
function getWindow() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("windowOut").innerHTML = "Din fönsterstorlek: " + "<br> Bredd: " + w + "<br> Höjd: " + h;
    var resH = screen.availHeight;
    var resW = screen.availWidth;
    document.getElementById("resOut").innerHTML = "Din resolution: " + "<br> Bredd: " + resW + "<br> Höjd: " + resH;
}
function hanteraAnsokan() {
    var form = document.loanapp;
    form.style.display = "none";
    var knappAnsok = document.getElementById("ansok");
    knappAnsok.style.display = "none";
    var knappSPS = document.getElementById("spelaSPS");
    knappSPS.style.display = "none";
    var spsOut = document.getElementById("spsOut");
    spsOut.style.display = "none";
    document.getElementById("formInfo").innerHTML = "Din ansökan skickades! <br> <br>";
}
function getSpam() {
    alert("TACK, DINA BANKKODER BLEV JUST JOINKSADE, SKAFFA VPN NÄSTA GÅNG!!!!")
}



//Uppg 7: Arrays, Slumpmässighet och sortering &
//Uppg 8: Sten Papper Sax
function spela() {
    console.log("Låt spelet börja, du tävlar mot spelare 2");
    var spelare1 = prompt("Väljder du sten, papper eller sax?");
    console.log("du valde " + spelare1)
    var myPlayersFirstName = ["Johannes", "Michael",
        "Tobias", "Dennis", "Linus", "Arnold", "Tobias", "Sebastian",
    "Kevin", "Kalle", "Christoffer", "Niilo", "Max", "Robin", "Saku",
    "Anna", "Jessica", "Jonathan", "Lucas", "Dennis", ];
    myPlayersFirstName.sort;
    var myPlayersLastName = ["Johansson", "Björk", "Persson",
     "Dennisson", "Torvalds", "Eriksson", "Skogberg", "Javasson",
    "Scriptsson", "Kvist", "Kvarn", "Skogfält", "Tammfält", "Ricksson", 
    "Lucasson" , "HTMLsson", "Björn", "Carlsson", "von Richwart", "Nilssen"]
    var myCharacters = ["sax", "papper", "sten"];

    var spelare2 = myPlayersFirstName[Math.floor(Math.random() * myPlayersFirstName.length)] + " " + myPlayersLastName[Math.floor(Math.random() * myPlayersLastName.length)] ;
    var spelare2Val = myCharacters[Math.floor(Math.random() * myCharacters.length)];
    document.getElementById("spelare2Out").innerHTML = ("Spelare 2: " + spelare2 + " Valde: " + spelare2Val);

    var spelare3 = myPlayersFirstName[Math.floor(Math.random() * myPlayersFirstName.length)] + " " + myPlayersLastName[Math.floor(Math.random() * myPlayersLastName.length)] ;
    var spelare3Val = "Spelare 3: " + spelare3 + " Valde: " + myCharacters[Math.floor(Math.random() * myCharacters.length)]
    document.getElementById("spelare3Out").innerHTML = spelare3Val;

    var spelare4 = myPlayersFirstName[Math.floor(Math.random() * myPlayersFirstName.length)] + " " + myPlayersLastName[Math.floor(Math.random() * myPlayersLastName.length)] ;
    var spelare4Val = "Spelare 4: " + spelare4 + " Valde: " + myCharacters[Math.floor(Math.random() * myCharacters.length)]
    document.getElementById("spelare4Out").innerHTML = spelare4Val;

    var spelare5 = myPlayersFirstName[Math.floor(Math.random() * myPlayersFirstName.length)] + " " + myPlayersLastName[Math.floor(Math.random() * myPlayersLastName.length)] ;
    var spelare5Val = "Spelare 5: " + spelare5 + " Valde: " + myCharacters[Math.floor(Math.random() * myCharacters.length)]
    document.getElementById("spelare5Out").innerHTML = spelare5Val;

    var spelare6 = myPlayersFirstName[Math.floor(Math.random() * myPlayersFirstName.length)] + " " + myPlayersLastName[Math.floor(Math.random() * myPlayersLastName.length)] ;
    var spelare6Val = "Spelare 6: " + spelare6 + " Valde: " + myCharacters[Math.floor(Math.random() * myCharacters.length)]
    document.getElementById("spelare6Out").innerHTML = spelare6Val;


    if (spelare1 == "sten") {
        if (spelare2Val == "sax") {
            alert("Grattis, du är vinnaren!!")
        }
        else if (spelare2Val == "papper") {
            alert("Du förlorade!!")
        }
        else if (spelare1 == spelare2Val) {
            alert("Jämt spel!!")
        }
    }
    else if (spelare1 == "sax") {
        if (spelare2Val == "papper") {
            alert("Grattis, du är vinnaren!!")
        }
        else if (spelare2Val == "sten") {
            alert("Du förlorade!!")
        }
        else if (spelare1 == spelare2Val) {
            alert("Jämt spel!!")
        }
    }
    else if (spelare1 == "papper") {
        if (spelare2Val == "sten") {
            alert("Grattis, du är vinnaren!!")
        }
        else if (spelare2Val == "sax") {
            alert("Du förlorade!!")
        }
        else if (spelare1 == spelare2Val) {
            alert("Jämt spel!!")
        }
    }

    else {
        alert("Lär dig att läsa/skriva rätt!!")
    }
}

//Uppg 9: Tidtagarur

var c = 0;
var t;
var timer_is_on = 0;

function shodor(event) {
    console.log(event.button)


    function timedCount() {
        document.getElementById("txt").value = c;
        c = c + 1;
        t = setTimeout(timedCount, 1000);
    }
    if (event.button == 0) {

        if (!timer_is_on) {
            timer_is_on = 1;
            timedCount();
        }
    }
    
    else if (event.button == 2) {
        clearTimeout(t);
        timer_is_on = 0;
    }

    else if (event.button == 1){
        
        var lapValue = document.getElementById("txt").value;
        document.getElementById("lapOut").innerHTML += "<br> " + lapValue + " Sekunder";
    }
    
}
function clear (event){
    document.getElementById("lapOut").innerHTML ==  " " ;
}


document.getElementById("timerSquare").addEventListener("mousedown", shodor);





