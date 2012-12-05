// the hub encapsulates functionality to send or receive messages from redis.

var redis = require('redis')
  , colors = require('./colors')
  , cmd = redis.createClient()
  , evt = redis.createClient()
  , evtSubscriptions = []
  , cmdSubscriptions = [];

module.exports = {

    emitCommand: function(command) {
        console.log(colors.blue('\nhub -- publishing command ' + command.command + ' to redis:'));
        console.log(command);
        cmd.publish('commands', JSON.stringify(command));
    },

    onCommand: function(callback) {
        if (cmdSubscriptions.length === 0) {
            // subscribe to __commands channel__
            cmd.subscribe('commands');
        }
        cmdSubscriptions.push(callback);
        console.log(colors.blue('hub -- command subscribers: ' + cmdSubscriptions.length));
    },

    emitEvent: function(event) {
        console.log(colors.blue('\nhub -- publishing event ' + event.event + ' to redis:'));
        console.log(event);
        evt.publish('events', JSON.stringify(event));
    },

    onEvent: function(callback) {
        if (evtSubscriptions.length === 0) {
            // subscribe to __events channel__
            evt.subscribe('events');
        }
        evtSubscriptions.push(callback);
        console.log(colors.blue('hub -- event subscribers: ' + evtSubscriptions.length));
    }

};

// listen to events from redis and call each callback from subscribers
evt.on('message', function(channel, message) {

    var event = JSON.parse(message);

    if (channel === 'events') {

        console.log(colors.green('\nhub -- received event ' + event.event + ' from redis:'));
        console.log(event);
        
        evtSubscriptions.forEach(function(subscriber){
            subscriber(event);
        });

    }
});

// listen to commands from redis and call each callback from subscribers
cmd.on('message', function(channel, message) {

    var command = JSON.parse(message);

    if (channel === 'commands') {

        console.log(colors.green('\nhub -- received command ' + command.command + ' from redis:'));
        console.log(command);
        
        cmdSubscriptions.forEach(function(subscriber){
            subscriber(command);
        });

    }
});