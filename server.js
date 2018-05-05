var express = require("express");
var routes = require('./routes');
var handle = require("express-handlebars");
var port = process.env.PORT || 3000;

// this actually creates the server
var webServer = express();

// server settings
webServer.engine("handlebars",handle({
    defaultLayout: "main"
}))

webServer.set("view engine", "handlebars")

// setup a static server
webServer.use(express.static("./public"))

// setup server's routes
webServer.use(routes);
// to run the server
webServer.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}`)
});


