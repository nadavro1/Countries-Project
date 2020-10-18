const { default: Axios } = require('axios');
const express= require('express');
const route = express.Router();
const redis  = require('redis');
const isCached = require('./caching')
//get country by continent name
route.get('/:name',isCached,async(req,res,next)=>{
    try {
        const countries= await Axios.get(`https://restcountries.eu/rest/v2/region/${req.params.name}`)
        res.send(countries.data)
        const client = redis.createClient();
        //Store in Redis
        client.setex(req.params.name, 60, JSON.stringify(countries.data), (err, reply) => {
            if (err) {
                console.log(err);
            }
            console.log(reply);
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})

module.exports = route;