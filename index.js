require('dotenv').config();
const cors = require('cors');
const express = require('express')
const app = express()
const path = require('path')

app.use(express.json()); // parse JSON bodies

const userRoutes = require('./server/routes/user')
const postRoutes = require('./server/routes/post')


const { login } = require('./server/models/user');
const { getUser } = require('./server/models/user');
const { getAllUserPosts } = require('./server/models/post'); 

//route to at least one other entity that is NOT user/customer/etc.

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use('/users', userRoutes)
app.use('/posts', postRoutes)
// app.use('/posts', postRoutes)
// app.use for routes above

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}!!!`))