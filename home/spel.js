console.log("Scriptet har laddats!");
function spela() {
    console.log("Låt spelet börja");
    var spelare1 = prompt("Väljder du sten, papper eller sax?");
    console.log("du valde " + spelare1)

    var myCharacters = ["sax", "papper", "sten"];
    var spelare2 = myCharacters[Math.floor(Math.random() * myCharacters.length)];
    console.log("Spelare 2 valde " + spelare2)

    if(spelare1 == "sten"){
        if(spelare2 == "sax"){
            alert("Grattis du är vinnaren!!")
        }
        else if (spelare2 == "papper"){
            alert("Rip du förlorade!!")
        }
        else if (spelare1 == spelare2){
            alert("Oh shit so rare, de blev draw")
        }
    }
    else if (spelare1 == "sax"){
        if(spelare2 == "papper"){
            alert("Grattis du är vinnaren!!")
        }
        else if (spelare2 == "sten"){
            alert("Rip du förlorade!!")
        }
        else if (spelare1 == spelare2){
            alert("Oh shit so rare, de blev draw")
        }
    }
    else if (spelare1 == "papper"){
        if(spelare2 == "sten"){
            alert("Grattis du är vinnaren!!")
        }
        else if (spelare2 == "sax"){
            alert("Rip du förlorade!!")
        }
        else if (spelare1 == spelare2){
            alert("Oh shit so rare, de blev draw")
        }
    }
    
    else {
        alert("Lär dig o läsa/skriva rätt!!")
    }
}