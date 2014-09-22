module.exports = require('cqrs-eventdenormalizer').defineViewBuilder({
  name: 'itemDeleted',
  id: 'payload.id'
}, 'delete');