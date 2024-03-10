const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
	const password = document.querySelector("#password");
	const confirmPassword = document.querySelector("#confirm");

	if (password.value !== confirmPassword.value) {
		alert("Passwords do not match!");
		event.preventDefault(); // Prevent form submission
	}
});
