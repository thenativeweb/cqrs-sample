module.exports = require('cqrs-domain').defineEvent({
  name: 'itemDeleted'
},
function (data, aggregate) {
  aggregate.destroy();
});