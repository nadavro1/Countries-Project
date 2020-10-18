const redis  = require('redis');
const isCached = (req, res, next) => {
    const client = redis.createClient();
    const { name } = req.params;
    //First check in Redis
        client.get(name, (err, data) => {
            if (err) {
                console.log(err);
            }
            if (data) {
                const reponse = JSON.parse(data);
                return res.status(200).json(reponse);
            }
            next();
        });
    }

module.exports = isCached