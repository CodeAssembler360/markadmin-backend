const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ingredient=new Schema({
    name:{
        type:String,
        default:""
    },
})
module.exports=mongoose.model('ingredient',ingredient)