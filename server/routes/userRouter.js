import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
import { userModel } from '../models/userModel.js'
const jwtSecret = "HaHa"

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await userModel.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await userModel.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      email,
      username,
      password: hashedPassword,
    });

    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, jwtSecret);
    console.log(authToken);
    return res.json({ status: true, authToken });
  } catch (ex) {
    // next(ex);
    console.log(ex);
    res.json({ msg: "internal server error" });
  }
})


// used to handle login page
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ msg: "Invalid credential", status: false });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.json({ msg: "Invalid credential", status: false });
    }

    const data = {
      user: {
        id: user.id
      }
    }

    const authToken = jwt.sign(data, jwtSecret);
    return res.json({ status: true, authToken });
  } catch (error) {
    console.error(error.message);
    res.json({ msg: "internal server error" });
  }
});


// this route is used for only practice purpose there is no actual use of it in app

router.get('/userdata', async (req, res) => {
  const token = req.header('authToken');
  // console.log(token);
  if (!token) {
    res.json({status:false});
  }
  try {
    const data = jwt.verify(token,jwtSecret);
    // console.log(data);
    res.json({status:true});
  } catch (error) {
    res.json({msg:"invalid token",status:false});
  }
})




export { router as userRouter };