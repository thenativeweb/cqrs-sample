// server.js is the starting point of the domain process:
//
// `node server.js` 
var colors = require('../colors')
  , msgbus = require('../msgbus')
  , domain = require('cqrs-domain').domain;

var options = {
    commandHandlersPath: __dirname + '/commandHandlers',
    aggregatesPath: __dirname + '/aggregates',
    eventStore: {
        type: 'inMemory', //'mongoDb',
        dbName: 'cqrssample'
    },
    commandQueue: {
        type: 'inMemory', //'mongoDb',
        dbName: 'cqrssample'
    }
};

domain.initialize(options, function(err) {
    if(err) {
        console.log(err);
    }

    // on receiving a message (__=command__) from msgbus pass it to 
    // the domain calling the handle function
    msgbus.onCommand(function(cmd) {
        console.log(colors.blue('\ndomain -- received command ' + cmd.command + ' from redis:'));
        console.log(cmd);
    
        console.log(colors.cyan('\n-> handle command ' + cmd.command));
        
        domain.handle(cmd);
    });

    // on receiving a message (__=event) from domain pass it to the msgbus
    domain.on('event', function(evt) {
        console.log('domain: ' + evt.event);
        msgbus.emitEvent(evt);
    });    
    
    console.log('Starting domain service'.cyan);
});