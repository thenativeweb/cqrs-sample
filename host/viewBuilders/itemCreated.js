module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'itemCreated',
  id: 'payload.id'
}, 'create');