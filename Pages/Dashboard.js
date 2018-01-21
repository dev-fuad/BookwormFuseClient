var Observable = require("FuseJS/Observable");

var user = Observable();

user = this.Parameter;

var email = user.map(function(x) { return x.email; });
var confirmed = user.map(function(x) { return x.confirmed; });
var token = user.map(function(x) { return x.token; });

function logout() {
  router.goBack();
}

module.exports = {
  user: user,

  email: email,
  confirmed: confirmed,
  token: token,

  logout: logout
};