"use-strict";
const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const product=new Schema({
    itemCode:{
        type:String,
        default:""
    },
    itemName:{
        type:String,
        default:"",
    },
    purchasesDescription:{
        type:String,
        default:"",
    },
    purchasesUnitPrice:{
        type:String,
        default:"",
    },
    purchasesAccount:{
        type:String,
        default:"",
    },
    purchasesTaxRate:{
        type:String,
        default:"",
    },
    salesDescription:{
        type:String,
        default:"",
    },
    salesUnitPrice:{
        type:String,
        default:"",
    },
    salesAccount:{
        type:String,
        default:"",
    },
    salesTaxRate:{
        type:String,
        default:"",
    },
    inventoryAssetsAccount:{
        type:String,
        default:""
    },
    costOfGoodsSoldAccount:{
        type:String,
        default:""
    },   
});

module.exports=mongoose.model("product",product)