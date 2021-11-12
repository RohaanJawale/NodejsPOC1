var http = require('http');

// Handling Route when a server is intitated 
function handleRequest(request, response){
    // Response is succesful
    response.statusCode=200;
    // Setting Headers for PreFlight Requests for HTTP
    response.setHeader('Content-Type', 'text/html');
     if(request.url == '/about'){
        response.write('This is about page');
        response.end();
     }
     else if(request.url == '/monday'){
         const today = new Date();
        response.write(`${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}`);
        response.end();
     }  
     else
          response.write('<h4>Days of the Week</h4> <br><a href="/monday">Monday</a>');
          response.end();
}
// Creating a server without express
 const server = http.createServer(handleRequest).listen(5000);

console.log('Server Started at port', 5000);