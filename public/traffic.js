async function checkTraffic(){

let place = document.getElementById("place").value

if(place.trim() === ""){
alert("Enter a location")
return
}

/* starting location (Vijayawada) */

let startLat = 16.5062
let startLon = 80.6480

/* search query */

let searchQuery = place + ", India"

/* geocode */

let geo = await fetch(
`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1&countrycodes=in`
)

let geoData = await geo.json()

if(geoData.length === 0){
alert("Location not found in India")
return
}

let destLat = geoData[0].lat
let destLon = geoData[0].lon

/* route distance */

let route = await fetch(
`https://router.project-osrm.org/route/v1/driving/${startLon},${startLat};${destLon},${destLat}?overview=false`
)

let routeData = await route.json()

if(!routeData.routes){
alert("Route not available")
return
}

let distanceKm = routeData.routes[0].distance / 1000

/* speed assumptions */

let carSpeed = 45
let bikeSpeed = 50
let busSpeed = 35

let carTime = Math.round(distanceKm / carSpeed * 60)
let bikeTime = Math.round(distanceKm / bikeSpeed * 60)
let busTime = Math.round(distanceKm / busSpeed * 60)

/* traffic delay simulation */

let delay = Math.floor(Math.random() * 10)

document.getElementById("results").innerHTML = `

Location: <b>${place}</b><br><br>

Distance: ${distanceKm.toFixed(2)} km<br><br>

🚗 Car: ${carTime + delay} minutes<br>
🏍 Bike: ${bikeTime + delay} minutes<br>
🚌 Bus: ${busTime + delay} minutes<br><br>

⚡ If traffic clears → ${carTime} minutes

`

generateGraph()

}

/* graph */

let chart

function generateGraph(){

let labels = []
let data = []

for(let i=0;i<10;i++){

labels.push(i*5 + " min")
data.push(Math.floor(Math.random()*100))

}

if(chart){
chart.destroy()
}

const ctx = document.getElementById("trafficGraph")

chart = new Chart(ctx,{
type:"line",
data:{
labels:labels,
datasets:[{
label:"Traffic Density %",
data:data,
tension:0.4
}]
},
options:{
scales:{
y:{
beginAtZero:true,
max:100
}
}
}
})

}