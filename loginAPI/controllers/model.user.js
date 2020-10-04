const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserShema = new Schema({
    email: {type: String , required :true , max:200, unique : true},
    username : {type : String, required : true , max : 100, unique:true},
    password : {type : String, required : true , max : 100, unique:false}

    
});

module.exports = mongoose.model('User',UserShema);