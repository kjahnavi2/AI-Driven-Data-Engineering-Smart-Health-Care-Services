async function loadPatients(){

const data = await fetch("/patients").then(r=>r.json())

const table = document.getElementById("patientTable")

data.forEach(p=>{

const row=document.createElement("tr")

row.innerHTML=`
<td>${p.name}</td>
<td>${p.age}</td>
<td>${p.condition}</td>
`

table.appendChild(row)

})

}

loadPatients()