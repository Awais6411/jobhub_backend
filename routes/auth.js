const router = require("express").Router();
const authController = require("../controllers/authContoller");


// REGISTRATION 

router.post("/register", authController.createUser);

// router.post("/register", function(req, res){
//     authController.createUser});
// LOGIN 
router.post("/login", authController.loginUser);


module.exports = router
// module.exports = app