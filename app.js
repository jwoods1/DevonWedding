// Start sails and pass it command line arguments
require('sails').lift(require('optimist'),require('newrelic').argv);
