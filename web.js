var express = require('express');
var fs = require ('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = new Buffer (Buffer.byteLength("Hello World from index.html"));
    buf = fs.readFileSync("index.html","utf8");
    //buf.toString();
    response.send(buf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
