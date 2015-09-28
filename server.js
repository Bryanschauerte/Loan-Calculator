var express = require('express');
var app = express();
app.use(express.static(__dirname+'/public'));
app.listen(5500);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/interest_rate', function(req, res){
var rate = (Math.random()*20 + 1).toFixed(2);
res.send(rate);
})
