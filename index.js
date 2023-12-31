const express = require('express')
const app = express()
const port = 3000
const dotenv=require('dotenv');
const mongoose=require('mongoose')
const authRoute=require('./routes/auth');
const userRoute=require('./routes/user');
const jobRoute=require('./routes/job');
const bookMarkRoute=require('./routes/bookmark');
dotenv.config();
//process.env.VARIABLE_NAME

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('db connected')).
catch((err)=>{console.log(err)})
app.use(express.json());
app.use("/api/",authRoute);
app.use("/api/users",userRoute);
app.use("/api/jobs",jobRoute);
app.use("/api/bookmarks",bookMarkRoute);
app.listen(port|| 5002, () => console.log(`Example app listening on port ${port}!`))