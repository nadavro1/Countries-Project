// getting the continents
const express= require('express');
const route = express.Router();
const fs = require('fs');

route.get('/',async(req,res)=>{//reading the file of the continents and bring back the data
    try {
        let filepath= __dirname + '/' + 'data.json'
        let rawdata = fs.readFileSync(filepath);
        let continents = JSON.parse(rawdata);
        res.send(continents);
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})

module.exports = route;