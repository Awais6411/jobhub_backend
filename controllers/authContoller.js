const User=require("../models/User");
const CryptoJS=require("crypto-js");
const authController = require("../controllers/authContoller");

module.exports = {
    updateUser: async (req, res) => {

    },

   
}
module.exports={
createUser: async (req,res)=>{
    const newUser=new User({
username:req.body.username,
email:req.body.email,
// var encrypted = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET);


password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString()

    });


    try {
        
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
},

loginUser:async(req,res)=>{
    try {
        
        const user=await User.findOne({email:req.body.email})
        !user&&res.status(401).json("invalid credentiols");

        const decryptedpass=CryptoJS.AES.decrypt(user.password, process.env.SECRET).toString()
        const depassword=decryptedpass.toString(CryptoJS.enc.Utf8);

        depassword!==req.body.password&&res.status(401).json("Wrong password");

const{password,__v,createdAt,...others}=user._doc;

        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error.toString());
    }
}
}



// module.exports = app
