console.log("script funcionando")

let usuariosAdmin = {
	"email": "admin@gmail.com",
	"password": "admin",
	"estado": true
}

localStorage.setItem("DatosUsuarios", JSON.stringify(usuariosAdmin))

function validateUser() {
	let usuario = usuariosAdmin.email
	let password = usuariosAdmin.password

	let nombreUsuario = document.getElementById("user-email").value
	let contraseñaUsuario = document.getElementById("user-password").value

	if (nombreUsuario !== usuario) {
		console.log("se cumplio la condicion")
		alert("petiso bandido no existe este usuario")
		return
	}

	if (password !== contraseñaUsuario) {
		console.log("se cumplio la condicion")
		alert("petiso bandido esta contraseña no existe")
		return
	}
}
document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector(".login-form")

	form.addEventListener("submit", (e) => {
		e.preventDefault()
		validateUser()
	})
})
