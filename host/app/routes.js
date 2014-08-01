exports.actions = function(app, options, repository) {

    var itemRepo = repository.extend({
        collectionName: 'item'
    });

    // this is only a little hack for this sample when it should work with inMemory DB
    if (options.repository.type === 'inMemory') {
        itemRepo = require('../viewBuilders/itemViewBuilder').repository;
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