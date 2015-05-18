'use strict';

/**
 * express application config
 * http://expressjs.com/migrating-4.html
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    favicon = require('serve-favicon'),
    compress = require('compression'),
    methodOverride = require('method-override'),
    config = require('./config'),
    logger = console,
    hbs = require('express-hbs'),
    handlebars =  require('./handlebars'),
    path = require('path'),
    glob = require('glob'),
    util = require('util'),
    _ = require('lodash');


module.exports = function (db) {
    // Initialize express app
    var app = express();

    // Should be placed before express.static
    app.use(compress({
        filter: function (req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        }
    }));

    _.forEach(glob('./service/models/*.js',  { sync: true }), function (filePath) {
        var a = require(path.resolve(filePath))(app);
        logger.info('load model file: %s', filePath);
    });
    // Showing stack errors
    app.set('showStackError', true);

    //handlebars
    app.engine('hbs', handlebars);
    app.set('view engine', 'hbs');
    app.set('views', path.resolve('./app/views'));

    // environment sensible configurations
    switch (process.env.NODE_ENV) {
    case 'development':
        break;

    case 'production':
        break;
    }

    //  request body parsing middleware should be above methodOverride
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride('X-HTTP-Method-Override'));

    // Enable jsonp
    app.enable('jsonp callback');

    // cookieParser should be above session
    app.use(cookieParser());

    // Setting the app router and static folder
    //app.use(favicon(path.resolve('./app/favicon.ico')));
    app.use(express.static(path.resolve('./public')));

    // globals: request, config, controller, page
    app.use(function (req, res, next) {
        var components = _.filter(req.path.split('/'));
        if (components.length === 0) {
            components = ['index', 'index'];
        } else if (components.length === 1) {
            components.push('index');
        }
        req.page = components.join('-');
        req.controller = components[0];
    
        app.locals.request = req;
        app.locals.config = config;
    
        next();
    });

    _.forEach(glob('./app/routes/*.js',  { sync: true }), function (filePath) {
        require(path.resolve(filePath))(app);
        logger.info('load router file: %s', filePath);
    });


    app.use(function (req, res) {
        res.render('404', {
            url: req.originalUrl,
            messages: 'Not Found'
        });
    });
    return app;
};
