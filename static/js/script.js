const users = JSON.parse(localStorage.getItem('DatosUsuarios') || "[]");

let usuariosAdmin = {
	"email": "admin@gmail.com",
	"password": "admin",
	"estado": true
}

users.push(usuariosAdmin)

localStorage.setItem("DatosUsuarios", JSON.stringify(users))

document.addEventListener("DOMContentLoaded", function () {

	const signinButton = document.getElementById("signin-button");

	function validateUser() {

		const usuario = usuariosAdmin.email
		const password = usuariosAdmin.password

		const nombreUsuario = document.getElementById("user-email").value
		const contraseñaUsuario = document.getElementById("user-password").value

		if (nombreUsuario === "" || contraseñaUsuario === "") {
			console.error("el usuario dejo el formulario vacio");
			alert("Debes rellenar el formulario para continuar");
			return
		}

		if (nombreUsuario !== usuario) {
			console.error("el usuario no ingresado el admin");
			alert("petiso bandido no existe este usuario");
			return
		}

		if (password !== contraseñaUsuario) {
			console.error("el usuario se equivoco en la contraseña");
			alert("petiso bandido esta contraseña no existe");
			return
		}

		return window.location.href="../../home.html"
	}

	signinButton.onclick = validateUser;
});
