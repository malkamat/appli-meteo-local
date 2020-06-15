const localisation = document.querySelector(".localisation")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      const long = position.coords.longitude
      const lat = position.coords.latitude
      const apiMeteo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
      exclude=hourly,daily&appid=2dce2d135bf36620109ad59883999ad4`
      const getApi = async function () {
        let response = await fetch(apiMeteo)
        if (response.ok) {
          let data = await response.json()
          console.log(data)
         localisation.textContent = data.timezone
         temperature.textContent =  `${Math.floor(data.current.temp)} °`
        

        } else {
          console.log(response.status)
        }
      }
      getApi()
      // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2dce2d135bf36620109ad59883999ad4`)
      // .then(response => response.json())
      // .then(data => console.log(data))



    })
  }
})