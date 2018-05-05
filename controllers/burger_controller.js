const burgerModel = require("../models/burger");

module.exports={
    getBurgers:()=>burgerModel.all()
    
}