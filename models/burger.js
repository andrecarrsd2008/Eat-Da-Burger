const orm = require("../config/orm");

module.exports={
    all: ()=> orm.selectAll("burgers"),
}