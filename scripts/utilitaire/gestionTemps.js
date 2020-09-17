const joursSemaine = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche",]

let ajd = new Date()
let options = {weekday: "long"}
let jourActuel = ajd.toLocaleDateString("fr-FR", options)

let tabJoursOrdre = joursSemaine.slice(joursSemaine.indexOf(jourActuel)).concat(joursSemaine.slice(0, joursSemaine.indexOf(jourActuel)))

export default tabJoursOrdre