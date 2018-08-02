var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "application/file"});
    fs.createReadStream("test.js").pipe(response);
    console.log(request.url)
}).listen(3000);