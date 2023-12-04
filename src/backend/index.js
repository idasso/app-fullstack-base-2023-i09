//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};


var app     = express();
app.use(cors(corsOptions));

var utils   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Main module code ]==================================================
app.get("/otraCosa/:id/:algo",(req,res,next)=>{
    console.log("id",req.params.id)
    console.log("algo",req.params.algo)
    utils.query("select * from Devices where id="+req.params.id,(err,rsp,fields)=>{
        if(err==null){
            console.log("rsp: ",rsp);
            res.status(200).send(JSON.stringify(rsp));
        }else{
            console.log("err: ",err);
            res.status(409).send(err);
        }
    });
});

app.get('/devices/', function(req, res, next) {
    utils.query("select * from Devices where 1",(err,rsp,fields)=>{
        if(err==null){
            console.log("rsp: ",rsp);
            devices = rsp;
            res.status(200).send(JSON.stringify(devices));
        }else{
            console.log("err: ",err);
            res.status(409).send(err);
        }
    });
});
    
app.post("/device",(req,res,next)=>{
    console.log("Llego el post",
    "UPDATE Devices SET state = "+req.body.state+" WHERE id = "+req.body.id);
    utils.query("UPDATE Devices SET state = "+req.body.state+" WHERE id = "+req.body.id);
    console.log("req.body.name:", req.body.name);
    console.log("res.status:", res.statusCode);
    if(res.statusCode==200){
        res.status(200).send("Se actualizó el estado dispositivo.");
    } else{
        res.status(409).send("Error al actualizar el estado del dispositivo.");
    }
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
