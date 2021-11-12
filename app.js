var express = require('express');
var app = express();

// Default Route for Home Page
app.get('/',(req,res)=>{
console.log('Inside home Page')
res.send('Inside home Page')

})

//Route handler
app.get('/details', getTime, (req, res) => {
  return  res.send(req.newDate);
  })
  
// MiddleWare for seetiing the response
function getTime(req,res,next){
    console.log('We will give the time');
    today = new Date();
    // Set Data for sending it across 
    req.newDate = `${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}`
    next()
}

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
