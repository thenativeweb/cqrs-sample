var base = require('rule-validator');
module.exports = base.extend(
    {
        createItem: { text: { type: 'string', required: true } },
        changeItem: { text: { type: 'string', required: true } }
    },
    {
        aggregate: 'itemAggregate'
    }
);