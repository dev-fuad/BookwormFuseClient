var Observable = require("FuseJS/Observable");
var API = require("Modules/APIs/Authentication");

var email =  Observable("");
var password =  Observable("");

function login() {
	isBusy.activate();
  API.login({
		email: email.value,
		password: password.value
	})
    .then(res => {
			if (res.error !== undefined) {
				console.error(JSON.stringify(error));
			} else if (res.user.token !== undefined) {
				localStorage.user = res.user;
				router.push("dashboard", res.user);
			} else {
				console.error(JSON.stringify(res));
			}
			isBusy.deactivate();
		})
    .catch(err => { 
			isBusy.deactivate();
			console.error(err);
		});
}

module.exports = {
  email: email,
  password: password,

  goToDashboard: login
}