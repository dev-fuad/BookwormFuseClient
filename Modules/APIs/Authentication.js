var api = require("Modules/API");

function loginAPI() {
  return api("auth", {
		method: "POST",
		body: {
			credentials: {
        email: email.value,
        password: password.value
      }
		}
	});
}

module.exports = {
  login: loginAPI
};
