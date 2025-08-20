const users = JSON.parse(localStorage.getItem('DatosUsuarios') || "[]");

document.addEventListener("DOMContentLoaded", function () {
	const registerButton= document.getElementById("register-button")

	function validateRegister() {
		console.log("Funcion para validar registro")
        const username = document.getElementById("user-name-register").value
		const emailRegister = document.getElementById("user-email-register").value
		const passwdRegister = document.getElementById("user-password-register").value
		const passwdRegisterConfirm = document.getElementById("user-password-register-confirmation").value

		if (emailRegister === "" || passwdRegister === "" || passwdRegisterConfirm === "" || username === ""){
			return alert("Debes rellenar todos los campos para registrarte")
		}

		if (passwdRegister !== passwdRegisterConfirm) {
			return alert("La contraseña no concide")
		}

        let newUser = {
            "nombre": username,
            "email": emailRegister,
            "passwd": passwdRegister,
            "estado": true
        }
        users.push(newUser)

        localStorage.setItem("DatosUsuarios", JSON.stringify(users))

	}

	registerButton.onclick = validateRegister;
})