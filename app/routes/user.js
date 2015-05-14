var user = require('../../service/controllers/user');

module.exports = function (app) {
    app.get('/user/signup', user.signup);
    app.post('/user/signup', user.postSignup);
};
