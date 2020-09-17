import tabJoursOrdre from "./utilitaire/gestionTemps.js"

const chargementContainer =  document.querySelector(".overlay-icone-chargement")
const cleApi = "5ad9860401b5241e7b174b336c30a632"
const temps = document.querySelector(".temps")
const temperature = document.querySelector(".temperature")
const localisation = document.querySelector(".localisation")
const heure = document.querySelectorAll(".heure-nom-prevision")
const tempPourH = document.querySelectorAll(".heure-prevision-valeur")
const joursDiv = document.querySelectorAll(".jour-nom-prevision")
const tempJoursDiv = document.querySelectorAll(".jour-prevision-temp")
const imageIcone = document.querySelector(".logo-meteo")
let resultatsApi

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        let long = position.coords.longitude
        let lat = position.coords.latitude
        appelApi(long, lat)
    }, () => {
        alert("Vous ne pouvez pas utiliser cette application sans avoir accépté de partager votre géolocalisation")
    })
}

function appelApi(long, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
    exclude=minutely&units=metric&lang=fr&appid=${cleApi}`)
    .then(response => response.json())
    .then(data => {
        resultatsApi = data
        temps.innerText = resultatsApi.current.weather[0].description
        temperature.innerText = `${Math.trunc(resultatsApi.current.temp)}°`
        localisation.innerText = resultatsApi.timezone
    
        let heureActuelle = new Date().getHours()
    
        for(let i = 0 ; i < heure.length ; i++) {
            let heureIncr = heureActuelle + i * 3
                if(heureIncr > 24) {
                    heure[i].innerText = `${heureIncr - 24} h`

                } else if (heureIncr === 24) {
                    heure[i].innerText = "00 h"
                } else {
                    heure[i].innerText = `${heureIncr} h`

                }
                         
        } 

        for(let j = 0; j < tempPourH.length ; j++) {
            tempPourH[j].innerText = `${Math.trunc(resultatsApi.hourly[j * 3].temp)} °`
        }

        for(let k = 0 ; k < tabJoursOrdre.length; k++) {
            joursDiv[k].innerText = tabJoursOrdre[k].slice(0,3)
        }

        for(let m = 0 ; m < 7 ; m++) {
            tempJoursDiv[m].innerText = `${Math.trunc(resultatsApi.daily[m + 1].temp.day)} °`
        }

        if(heureActuelle >= 6 && heureActuelle < 21) {
            imageIcone.src = `ressources/jour/${resultatsApi.current.weather[0].icon}.svg`
        } else {
            imageIcone.src = `ressources/nuit/${resultatsApi.current.weather[0].icon}.svg`

        }

        chargementContainer.classList.add("disparition")

    } )

   
}