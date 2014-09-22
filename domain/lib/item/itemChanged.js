module.exports = require('cqrs-domain').defineEvent({
  name: 'itemChanged'
},
function (data, aggregate) {
  aggregate.set(data);
});