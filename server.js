require('events').EventEmitter.defaultMaxListeners = 20;

const express = require('express')
const app = express()
const port = 3000;
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const menu = require('./models/menu');

app.get('/', (req, res)=>{
    res.send('welcome to my hotel')
})


// import the router files
const insaanRoutes = require('./routes/insaanRoutes');
const menuRoutes = require('./routes/menuRoutes');

// use the routers
app.use('/insaan', insaanRoutes);
app.use('/menu', menuRoutes);

app.listen(port, ()=>{
    console.log(`app is listening on http://localhost:${port}`)
})

