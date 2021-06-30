const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    coursename:{
        type:String,
        require:true
    },
    dcsp:{
        type:String,                        
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    Sdate:{
        type:String,
        require:true
    },
    weekno:{
        type:Number,
        require:true
    },
   
  
})


const user = mongoose.model('USER',userSchema);
module.exports = user;









