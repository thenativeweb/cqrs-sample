var repository = require('viewmodel').read
  , itemRepo = repository.extend({
        collectionName: 'item'
    });

exports.actions = function(app, options) {

    // this is only a little hack for this sample when it should work with inMemory DB
    if (options.repository.type === 'inMemory') {
        itemRepo = require('../eventDenormalizers/itemEventDenormalizer')._getAux().repository;
    }

    app.get('/', function(req, res) {
        res.render('index');
    });
        
    app.get('/allItems.json', function(req, res) { 
        itemRepo.find(function(err, items) {
            if (err) res.json({});
                
            res.json(items);
        });
    });

};