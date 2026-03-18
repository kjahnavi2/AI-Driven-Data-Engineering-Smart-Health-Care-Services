async function loadHospitals(){

const data = await fetch("/hospitals").then(r=>r.json())

const table = document.getElementById("hospitalTable")

data.forEach(h=>{

const row = document.createElement("tr")

row.innerHTML=`
<td>${h.name}</td>
<td>${h.icuBeds}</td>
<td>${h.generalBeds}</td>
`

table.appendChild(row)

})

}

loadHospitals()