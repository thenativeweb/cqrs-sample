var base = require('rule-validator');
module.exports = base.extend(
    {
        createItem: {
            type: 'object',
            properties: {
              text: { type: 'string' }
            },
            required: ['text']
        },
        changeItem: {
            type: 'object',
            properties: {
              text: { type: 'string' }
            },
            required: ['text']
        }
    },
    {
        aggregate: 'itemAggregate'
    }
);
