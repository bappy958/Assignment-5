const loginForm = document.getElementById("loginForm")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const errorMessage = document.getElementById("errorMessage")

const validUser = "admin"
const validPassword = "admin123"

loginForm.addEventListener("submit", function(e){

e.preventDefault()

const username = usernameInput.value.trim()
const password = passwordInput.value.trim()

if(username === "" || password === ""){
errorMessage.textContent = "Please enter username and password"
return
}

if(username === validUser && password === validPassword){

window.location.href = "dashboard.html"

}else{

errorMessage.textContent = "Invalid username or password"

}

})