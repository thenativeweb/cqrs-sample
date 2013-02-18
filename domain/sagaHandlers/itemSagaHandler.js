var sagaHandlerBase = require('cqrs-domain').sagaHandlerBase;
 
module.exports = sagaHandlerBase.extend({

    events: ['itemChanged'],

    saga: 'itemSaga'

});
