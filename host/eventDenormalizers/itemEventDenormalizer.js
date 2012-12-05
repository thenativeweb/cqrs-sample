var base = require('cqrs-eventdenormalizer').eventDenormalizerBase;
 
module.exports = base.extend({
  
    events: [{'itemCreated': 'create'}, {'itemChanged': 'update'}, {'itemDeleted': 'delete'}],
    collectionName: 'item'
 
});