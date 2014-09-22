module.exports = require('cqrs-domain').defineCommand({
  name: 'createItem'
}, function (data, aggregate) {
  aggregate.apply('itemCreated', data);
});