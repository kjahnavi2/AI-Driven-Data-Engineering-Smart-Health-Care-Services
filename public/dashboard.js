/* ================= LOGIN CHECK ================= */

let user = localStorage.getItem("loggedUser")

if(!user){
window.location.href = "index.html"
}

/* ================= DISPLAY USER ================= */

document.getElementById("userDisplay").innerText = "👤 " + user


/* ================= IMAGE SLIDESHOW ================= */

const images = [
"hospital.png",
"ambulance.png"
]

let index = 0

function changeImage(){

index++

if(index >= images.length){
index = 0
}

document.getElementById("healthImage").src = images[index]

}

setInterval(changeImage,2000)


/* ================= LOGOUT ================= */

function logout(){

localStorage.removeItem("loggedUser")

window.location.href = "index.html"

}


/* ================= NOTIFICATIONS ================= */

function showNotification(message){

let box = document.getElementById("notificationBox")

let note = document.createElement("div")

note.className = "notification"

note.innerText = message

box.appendChild(note)

setTimeout(function(){
note.remove()
},4000)

}


/* ================= RANDOM ALERTS ================= */

const notifications = [

"⚠ Critical patient admitted",
"🚑 Ambulance dispatched",
"🏥 Emergency room available",
"🛏 ICU bed allocated",
"⚠ Medium risk patient detected",
"🚑 Ambulance returning to hospital",
"🏥 Doctor available for surgery"

]

function randomNotification(){

let randomIndex = Math.floor(Math.random() * notifications.length)

showNotification(notifications[randomIndex])

}

setInterval(randomNotification,8000)
