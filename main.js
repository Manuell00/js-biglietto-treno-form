// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo con massimo due decimali.

// VARIABILI
let passeggeroEta, passeggeroKm, passeggeroNome, prezzoBiglietto;



submitButton.addEventListener('click',

    function () {
        // Prendo il valore dell'input degli anni
        passeggeroEta = document.getElementById("years").value
        console.log(passeggeroEta)

        // Inserisco il valore di input del nome
        passeggeroNome = document.getElementById("name").value
        console.log(passeggeroNome)

        // Prendo il valore dell'input dei km
        passeggeroKm = parseInt(document.getElementById("ride").value)
        console.log(passeggeroKm)


        // Definisco il prezzo del biglietto base
        prezzoBiglietto = parseFloat(0.21 * passeggeroKm)

        // Creo delle ipotesi 
        if (passeggeroEta == "Young") {
            prezzoBiglietto = prezzoBiglietto - (0.2 * prezzoBiglietto)
        }

        else if (passeggeroEta == "Elderly") {
            prezzoBiglietto = prezzoBiglietto - (0.4 * prezzoBiglietto)
        }

        else {
            prezzoBiglietto = prezzoBiglietto
        }

        // Stampo il prezzo finale del biglietto
        document.getElementById("price").innerHTML = `${prezzoBiglietto.toFixed(2)} € `
    }
)
