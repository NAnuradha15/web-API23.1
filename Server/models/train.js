const mongoose = require('mongoose'); // Erase if already required

var Train = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Route_name:{
        type:String,
        required:true,
    },
    Status:{
        type:String,
        required:true,
    },
    longi:{
        type:Number,
        required:true,
    },
    lati:{
        type:Number,
        required:true,
    },
    creation_date: { 
        type: Date, 
        default: Date.now
    }
    
});

const train = mongoose.model("train",Train);

module.exports = train;