/*npm */
var app = require('express')();


/*var userscontroller = require('./controllers/users')*/
var usersmodel = require('./models/user')
var bodyParser = require('body-parser');

var port = process.env.PORT || 7777;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/about', function (req, res) {
    res.send('<link href="/bower_components/icomoon/style.css" rel="stylesheet">
<i class="icon-airplane"></i>

# If the above code doesn't work (may happen if you're also using Font Awesome)
# then reference the icon by its unicode value (found on the official site)
<span data-icon="&#xe0aa;"></span>');
});

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
 
app.get('/user', function (req, res) {
    res.json(usersmodel.findAll());
});
 
app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(usersmodel.findById(id));
});
 
app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add new ' + json.name + ' Completed!');
});
 


app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});


