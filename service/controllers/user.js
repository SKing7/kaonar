'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    _ = require('lodash');

/**
 * Create a Account
 */
exports.signup = function (req, res) {
    res.render('user/signup', {});
};
exports.postSignup = function (req, res) {
    var user = new User(req.body);

    account.save(function (err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                account: account
            });
        } else {
            res.jsonp(account);
        }
    });
};
