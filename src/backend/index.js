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
app.get("/otraCosa",(req,res,next)=>{
    utils.query("select id, name from Devices", (err,rsp,fields)=>{
    console.log("err: ",err);
    console.log("rsp: ",rsp);
    console.log("fields: ",fields);
    res.send("Listo");
    });
    
});

app.get('/devices/', function(req, res, next) {
    devices = [
        { 
            'id': 1, 
            'name': 'Lampara 1', 
            'description': 'Luz living', 
            'state': 0, 
            'type': 1, 
        },
        { 
            'id': 2, 
            'name': 'Ventilador 1', 
            'description': 'Ventilador Habitacion', 
            'state': 1, 
            'type': 2, 
        },
    ]
    res.send(JSON.stringify(devices)).status(200);
});

app.post("/device",(req,res,next)=>{
    console.log("Llego el post",
    "UPDATE Devices SET state = "+req.body.state+" WHERE id = "+req.body.id);
    if(req.body.name==""){
        res.status(409).send("no tengo nada que hacer");
    }else{
        res.status(200).send("se guardo el dispositivo");
    }
    
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
