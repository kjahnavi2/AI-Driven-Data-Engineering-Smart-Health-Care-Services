function signup(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

if(!user || !pass){
alert("Enter username and password")
return
}

if(localStorage.getItem(user)){
alert("Account already exists. Please login.")
return
}

localStorage.setItem(user,pass)

alert("Account created successfully!")

}

function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

let storedPass = localStorage.getItem(user)

if(storedPass === pass){

localStorage.setItem("loggedUser",user)

alert("Login successful!")

window.location="dashboard.html"

}else{

alert("Invalid username or password")

}

}