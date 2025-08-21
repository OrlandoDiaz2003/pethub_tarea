import User from "./user.js";


document.addEventListener("DOMContentLoaded", function() {
	console.log("funcion de registrar funcionando");
	const register = document.getElementById("register-button")

	register.onclick = () => {

		let name = document.getElementById("user-name-register").value;
		let email = document.getElementById("user-email-register").value;
		let passwd = document.getElementById("user-password-register").value;

		if (name === '' || email === '' || passwd === '') {
			return alert("Debes rellenar el formulario para continuar")
		}

		let users = JSON.parse(localStorage.getItem("Users")) || [];
		for(const user of users){
			if(user.email === email){
				console.error("este usuario ya existe")
				return
			}
		}
		const newUser = new User(name, email, passwd, true);


		users.push(newUser);

		localStorage.setItem("Users", JSON.stringify(users));
	};
});

