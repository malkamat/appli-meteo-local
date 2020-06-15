//variables globals

const localisation = document.querySelector(".localisation")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const canvas = document.querySelector("#icone")

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