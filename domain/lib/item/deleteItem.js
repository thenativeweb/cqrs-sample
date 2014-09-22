module.exports = require('cqrs-domain').defineCommand({
  name: 'deleteItem'
}, function (data, aggregate) {
  aggregate.apply('itemDeleted', data);
});