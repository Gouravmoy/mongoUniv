var express = require('express')
app = express();
cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.get('/', function (req, res) {
    //res.send("Hello World")
    res.render('hello', {'name': 'Gourav'});
});

app.get('*', function (req, res) {
    res.send("Page Not Found", 404);
});

app.listen(8080);
console.log("Express Server has started on port 8080");
