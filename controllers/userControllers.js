const User  = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const  generateToken  = require("../config/generateToken");

const registerUser = async (req,res) => {
  const {email,name,password} = req.body

  const userExist = await User.findOne({email})

  if(userExist){
    res.status(400);
    throw new Error("user Already Exists")
  }

  const newUser = await User.create({
    email,
    name,
    password
  })
  if(newUser){
      res.status(201).json({
        _id:newUser._id,
        email:newUser.email,
        name:newUser.name
      })
  }else{
    res.status(500).json({
        message:"something went wrong"
    })
  }
}

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

module.exports = {registerUser,authUser}