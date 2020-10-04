const express  = require('express');
const jwt  = require('jsonwebtoken');
const config = require('./config');

const app = express();

app.listen(config.PORT, () =>{
    console.log('server on port ' +  config.PORT)

});

app.get('/api', (req,res) =>{
    res.json({
        message : "welcome to the api"
    })
}); 


app.post('/api',veryfyToken, (req,res)=>{
    jwt.verify(req.token, 'secrettoken',(err, authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:"post Created",
                authData
            });
        }
        
    });
    
});


app.post('/api/login',(req,res)=>{
    // mock user
    const user = {
        id : "1",
        username: "brad",
        email:"brad@gmail.com"
    }
    jwt.sign({user:user}, 'secrettoken', {expiresIn : '30s'},(err ,token) =>{
        res.json({
            token
        })
    } );
})

//formato para token

//autho : Bearer <acces_token>


function veryfyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);    
    } 
}