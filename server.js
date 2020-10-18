const express = require ('express');
const redis  = require('redis');
const app = express();


//Init middleware
app.use(express.json({extended:false}));

app.use('/api/continent',require('./Routes/API/continent'));
app.use('/api/country',require('./Routes/API/country'));


const PORT= process.env.port || 4000;//or port=4000 or the port we put with npm
app.listen(PORT,() => {console.log(`Listening on port ${PORT}`)});

//Redis connection
const client = redis.createClient();
client.on("error", (err) => {
    console.error(err);
});
