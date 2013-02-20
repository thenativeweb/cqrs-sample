var base = require('cqrs-domain').sagaBase;

module.exports = base.extend({

    itemChanged: function(data) {
        
        if (data.text.toLowerCase().indexOf('delete') >= 0) {
            this.sendCommand( { command: 'deleteItem', payload: { id: data.id } } );
            this.set('destroyed', true);
        }
    }

});