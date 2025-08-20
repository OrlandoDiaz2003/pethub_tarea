console.log("script funcionando")

let usuariosAdmin = {
	"email": "admin@gmail.com",
	"password": "admin",
	"estado": true
}

localStorage.setItem("DatosUsuarios", JSON.stringify(usuariosAdmin))

document.addEventListener("DOMContentLoaded", function() {

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
	}

	signinButton.onclick = validateUser;
});
