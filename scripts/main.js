const cleApi = "5ad9860401b5241e7b174b336c30a632"
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
    .then(data => console.log(data))

}