const express = require('express');
const	path = require('path');
const  bodyParser = require	('body-parser');

const app = express();
const Port = "8081";

app.use(express.static(path.join(__dirname,('/'))));
app.use(express.static(path.join(__dirname,('./app'))));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/api/authenticate', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const validUser = {
    	username : 'vikas',
    	password:'vikas'
    }	
 	
 	function random(){
 		return Math.random() * 1000000000000000000000;
 	}
 		if(validUser.username === username && validUser.password ===password){
 			res.json({status:"200ok",message:"valid user",token:random()})
 		}
 		else{
 			res.json({status:"401",message:"Unauthorised"})
 		}

   
});




app.listen(Port ,function(){
	console.log("App started listening at 8081");

})