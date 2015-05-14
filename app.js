'use strict';
/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */
var config = require('./config/config'),
    logger = console,
    mongoose = require('mongoose');

// Bootstrap db connection
var db = mongoose.connect(config.mongodb);

// Init the express application
var app = require('./config/express')(db);

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Log initialization
logger.info('app started on port ' + config.port);

