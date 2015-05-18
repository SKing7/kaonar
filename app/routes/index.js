module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('user/signup', {
            title: '欢迎注册'
        });
    });
};
