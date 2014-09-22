module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'itemChanged',
  id: 'payload.id'
}, 'update');