module.exports = require('cqrs-domain').defineAggregate({
  // optional, default is last part of path name
  name: 'item',
  
  // optional, default ''
  defaultCommandPayload: 'payload',
  
  // optional, default ''
  defaultEventPayload: 'payload'
});