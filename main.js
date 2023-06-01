

// VARIABILI
let passeggeroEta, passeggeroKm, passeggeroNome, prezzoBiglietto;
const firstMainRow = document.getElementById("first-main-row");
const secondMainRow = document.getElementById("second-main-row");

// Get reference to the "GENERA" button
const generaButton = document.getElementById("submitButton");

// Aggiungo l'evento al click
generaButton.addEventListener('click',

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

        // Stampo il nome dell'utente del biglietto
        document.getElementById("nome-utente").innerHTML = passeggeroNome

        // Stampo il nome dell'offerta dell'utente del biglietto
        document.getElementById("offerta-utente").innerHTML = passeggeroEta

        // Stampo numero della carrozza dell'utente
        document.getElementById("carrozza-utente").innerHTML = Math.floor(Math.random() * 10)
        
        // Stampo il codice dell'utente del biglietto
        document.getElementById("codice-utente").innerHTML = Math.floor(Math.random() * 100) + 1
       
       // Stampo il prezzo dell'utente del biglietto
        document.getElementById("prezzo-utente").innerHTML = `${prezzoBiglietto.toFixed(2)} € `

        secondMainRow.classList.remove('no-visible')
   
    }
)
