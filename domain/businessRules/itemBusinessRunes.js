module.exports = {
    itemAggregate: [

        function checkForError(changed, previous, events, callback) {

            if (changed.text.toLowerCase().indexOf('error') >= 0) {
                return callback('This is just a sample rule!');
            }

            callback(null);

        }

    ]
};