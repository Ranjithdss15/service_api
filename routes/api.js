var express = require('express');
var router = express.Router();

router.get('/status/:statuscode',function(req,res,next){
   let statuscode = req.params.statuscode
   res.sendStatus(statuscode)
});

router.get('/latency/:latency',function(req,res,next){
    let latency = req.params.latency
    setTimeout(function(){
        console.log("Latency")
        res.send(`Latency applied is ${latency} ms`);
    },latency)
});

module.exports = router