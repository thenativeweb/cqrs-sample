var base = require('cqrs-eventdenormalizer').viewBuilderBase;
 
module.exports = base.extend({
  
    events: [
      {
        event: 'itemCreated',
        method: 'create',
      },
      {
        event: 'itemChanged',
        method: 'update',
      },
      {
        event: 'itemDeleted',
        method: 'delete',
      }
    ],
    collectionName: 'item'
 
});