const { model } = require("mongoose");
const users = require("../Database/model/userSchema");
const jwt = require('jsonwebtoken')
// logic for user registration
exports.register = async (req, res) => {
  console.log(req.body);
  /*  console.log('inside register function');
    res.status(200).json('Hello') */
  const { username, email, password } = req.body;

  try {
    const existingUser = await users.findOne({ mailId: email });
    if (existingUser) {
      res.status(406).json("user already exist");
    } else {
      const newUser = new users({
        username,
        mailId: email,
        password,
        profile: "",
        github: "",
        linkedIn: "",
      });
      // to store the particular data in mongodb mongoose method
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch(err){
    res.status(401).json("registration failed due to", err);
  }
};

//logic to login

exports.login = async(req,res)=>{
    console.log('inside login function');
    const {email, password} = req.body

    try{const existingUser =  await users.findOne({mailId:email,password:password},)

     if(existingUser){
  // token generate - singn('data', 'secretkey')
     const token = jwt.sign({userId:existingUser._id}, "superSecretkey123")
        res.status(200).json({existingUser,token})
     }
     else{
        res.status(406).json('incorrect emailID or password')
     }}
catch(err){
    res.status(401).json('login request failed due to', err)
}
}

//logic to profile update
exports.profileUpdate = async(req,res)=>{
  const userId = req.payload
  const {username,emailid,password,github,linkedin,profile}= req.body

  const uploadedImage = req.file?req.file.filename:profile
  try {
    const userProfile = await users.findByIdAndUpdate({_id:userId},{
      username,
      mailid:emailid,
      password,
      profile:uploadedImage,
      github,
      linkedIn:linkedin
    },{new:true})
    await userProfile.save()
    res.status(200).json(userProfile)
  } catch (error) {
    res.status(401).json('update profile failed due to', error)
  }
}
