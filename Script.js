window.onload = function() {


alert("welkom bij Raad het Getal");
alert("Je gaat in dit spel het getal tussen 1 en de 10 raden, er wordt aangegeven of het getal lager of hoger is dan je gegeven getal. Lukt dit niet binnen 3 pogingen, dan heb je verloren.");


var getal = parseInt( Math.random() * 10 + 1);


var getalgebruiker = prompt("Poging 1, Geef hier een getal tussen de 1 en de 10.");


    if (getalgebruiker == getal) {
        alert("Goed geraden!");
        document.getElementById("image1").src = "https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif";
        document.getElementById("result").innerHTML = "GEWONNEN! het getal was " +getal;
        document.getElementById("amount").innerHTML = "Je hebt het in 1 keer goed geraden!";
        document.getElementById("getal").disabled = true;
    }


    if (getalgebruiker > getal) {
        alert("Het getal is lager.");
    }
    else if (getalgebruiker < getal) {
        alert("Het getal is hoger.");
    }

    var getalgebruiker = prompt("Poging 2, Geef hier een getal tussen de 1 en de 10.");


    if (getalgebruiker == getal) {
        alert("Goed geraden!");
        document.getElementById("image1").src = "https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif";
        document.getElementById("result").innerHTML = "GEWONNEN! het getal was " +getal;
        document.getElementById("amount").innerHTML = "Je hebt het getal in 2 keer geraden!";
        document.getElementById("getal").disabled = true;
    }


    if (getalgebruiker > getal) {
        alert("Het getal is lager.");
    }
    else if (getalgebruiker < getal) {
        alert("Het getal is hoger.");
    }


var getalgebruiker = prompt("Poging 3, Geef hier een getal tussen de 1 en de 10.");


    if (getalgebruiker == getal) {
        alert("Goed geraden!");
        document.getElementById("image1").src = "https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif";
        document.getElementById("result").innerHTML = "GEWONNEN! het getal was " +getal;
        document.getElementById("amount").innerHTML = "Je hebt het getal in 3 keer geraden!";
        document.getElementById("getal").disabled = true;
    }


    if (getalgebruiker > getal) {
        alert("De 3 pogingen zijn voorbij, je hebt verloren.");
        document.getElementById("image2").src = "https://media.giphy.com/media/1jARfPtdz7eE0/giphy.gif";
        document.getElementById("result").innerHTML = "Helaas, het getal was " +getal;
        document.getElementById("amount").innerHTML = "Je 3 pogingen gedaan, het spel is nu voorbij!";
    }
    else if (getalgebruiker < getal) {
        alert("De 3 pogingen zijn voorbij, je hebt verloren.");
        document.getElementById("image2").src = "https://media.giphy.com/media/1jARfPtdz7eE0/giphy.gif";
        document.getElementById("result").innerHTML = "Helaas, het getal was " +getal;
        document.getElementById("amount").innerHTML = "Je 3 pogingen gedaan, het spel is nu voorbij!";
    }

    console.log("Informatica groepje");
}
