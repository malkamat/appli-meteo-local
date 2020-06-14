// const button = document.querySelector("input")
// const meteo = document.querySelector("p")



// async function afficherMeteo() {
//     try {
//         const api = "https://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=2dce2d135bf36620109ad59883999ad4"

//         let response = await fetch(api)
//         if (response.ok) {
//             let data = await response.json()
//             meteo.innerHTML = `il fait actuellement : ${data.main.temp}°`
//             console.log(data)
//         } else {
//             alert(`erreur ${response.status}`)
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }



// button.addEventListener("click", afficherMeteo)



// const texte = document.querySelector("textarea")
// const render = document.querySelector("div")

// texte.value = localStorage.getItem("texte")

// if (texte.value) {
//     render.innerHTML = marked(localStorage.getItem("texte"))
// }

// texte.addEventListener("input", function(e) {
//     localStorage.setItem("texte", texte.value)
//         render.innerHTML = marked(texte.value)

    
// })