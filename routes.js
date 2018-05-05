const router = require('express').Router();
const burgerController = require("./controllers/burger_controller");
router
// first argument is the path, second argument is the logic/function
   .get("/", (request, response, next) => {
    burgerController.getBurgers()
    .then(data=> response.render("index.handlebars",{burgers:data})) 
    .catch(err => console.log(err))  
})


module.exports = router; 



