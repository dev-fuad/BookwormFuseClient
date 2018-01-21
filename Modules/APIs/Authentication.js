var api = require("Modules/API");

function loginAPI({ email, password }) {
  return api("auth", {
		method: "POST",
		body: {
			credentials: {
        email: email,
        password: password
      }
		}
	});
}

module.exports = { 
  login: loginAPI 
};
