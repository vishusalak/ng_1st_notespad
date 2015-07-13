var express = require('express'),
    app = express();

app.use(express.static(__dirname + ''));

var port = Number(process.env.PORT || 3000);
app.listen(port);
