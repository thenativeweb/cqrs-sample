module.exports = require('cqrs-domain').defineEvent({
  name: 'itemCreated'
},
function (data, aggregate) {
  aggregate.set(data);
});