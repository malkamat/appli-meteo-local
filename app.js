//variables globals

const localisation = document.querySelector(".localisation")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const canvas = document.querySelector("#icone")
const joursSemaine = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
const joursDiv = document.querySelectorAll(".joursSemaine")
const iconePrev = document.querySelectorAll(".iconePrevision")

//date

let newDate =  new Date()
// console.log(newDate)
let options = {weekday: "long"}
let jourActuel = newDate.toLocaleDateString("fr-FR", options)
// console.log(jourActuel)
jourActuel = jourActuel.charAt(0).toUpperCase() + jourActuel.slice(1)
// console.log(jourActuel)

// calcul les 7 jours de la semaine fonction de la date actuel

let tabJoursOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)))
console.log(tabJoursOrdre)

for(i = 0; i < tabJoursOrdre.length; i++) {
  joursDiv[i].innerHTML = tabJoursOrdre[i].slice(0,3)
}


//event "load" qui récupere la longitude et la latitude pour les intégrer à l'appel de l'api
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      // variables permettant de savoir à quelle adresse récupérer l'objetJson de l'api pour avoir les données local
      const long = position.coords.longitude
      const lat = position.coords.latitude
      const apiMeteo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
      exclude=hourly,daily&appid=2dce2d135bf36620109ad59883999ad4`

      // fonction appel à l'api
      const getApi = async function () {
        let response = await fetch(apiMeteo)
        if (response.ok) {
          let data = await response.json()
          console.log(data)
         localisation.textContent = data.timezone
         temperature.textContent =  `${Math.trunc(data.current.temp)} °`
         description.textContent = data.current.weather[0].main
         canvas.innerHTML = `<img src=" http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png">`

         for(n =0; n < 7; n++) {
           
         }

        } else {
          console.log(response.status)
        }
      }
      //appel de la fonction getApi
      getApi()
      // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2dce2d135bf36620109ad59883999ad4`)
      // .then(response => response.json())
      // .then(data => console.log(data))



    })
  }
})