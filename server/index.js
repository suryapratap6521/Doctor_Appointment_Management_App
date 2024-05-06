import express from 'express'
import cors from 'cors'
import DBConnection from './database/db.js'
import { userRouter } from './routes/userRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

// here we start handling APIs

// api for handle ' register , signout , verifytoken'
app.use("/api/auth",userRouter);


// setup database connection
DBConnection();
const port = 5000;
app.listen(port,()=>{
    console.log("listening on 5000");
});
