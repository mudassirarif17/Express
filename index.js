const express = require('express');
// path is use for sending any static file  
const path = require('path');

const app = express()
const port = 3000

// for creating our own middleware
const myMiddleware = (req , res , next)=>{
    console.log(req);
    next();
}

// for sending any static folder
app.use(express.static(path.join(__dirname , "public")));
// app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)
})
app.get('/about', (req, res) => {
  res.send('About')
})
// for sending an html file to the browser and also for sending jSON 
app.get('/navbar', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
//   res.status(500);
    //  res.json({"name" : "mudassir"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})