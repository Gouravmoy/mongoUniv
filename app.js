var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    MongoServer = require('mongodb').Server,
    Db = require('mongodb').Db;


app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

db = new Db('test', new MongoServer('localhost', 27017, {'native_parser': true}));

app.get('/', function (req, res) {

    // Find one document in our collection
    db.collection('people').findOne({}, function (err, doc) {
        if (err) throw err;
        console.log(doc);
        res.render('hello', doc);
    });
});

app.get('*', function (req, res) {
    res.send('Page Not Found', 404);
});

db.open(function (err, mongoclient) {
    if (err) throw err;
    app.listen(8080);
    console.log('Express server started on port 8080');
});
