module.exports = require('cqrs-domain').defineCommand({
  name: 'changeItem'
}, function (data, aggregate) {
  aggregate.apply('itemChanged', data);
});