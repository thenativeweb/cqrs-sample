var commandHandlerBase = require('cqrs-domain').commandHandlerBase;
 
module.exports = commandHandlerBase.extend({
 
    aggregate: 'itemAggregate',
 
    commands: ['createItem', 'changeItem', 'deleteItem' ]
 
});