const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv").config();
const userModel = require('./Models/User');
const recipeModel = require('./Models/Recipe');
const app = express()
app.use(express.json({limit : "10mb"}))
app.use(cors())

const PORT = process.env.PORT || 5000

//code for connection to mongo db ATLAS
mongoose.set('strictQuery', false)
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log("database conected"))
    .catch((err)=>console.log(err+"failed"))
    
// mongoose
//     .connect("mongodb://127.0.0.1:27017/FooStudio")
//     .then(()=> console.log("database conected"))
//     .catch((err)=>console.log(err))

app.post("/Createnewrecipe", (req, res)=>{
  console.log(req.body)
  recipeModel.create(req.body)
  .then(recipedata=>{
    res.json(recipedata)
  })
  .catch(err => console.log(err))
})

app.get("/favourites/:_id", async(req,res)=>{
  const email = req.params._id;
  console.log(req.body)
  userModel.findOne({_id : email})
  .then(result=> {
    console.log(result.Favourites)
    res.json(result.Favourites)
  })
  .catch(err => console.log(err))
})

app.post("/addfav",(req, res)=>{
  console.log(req.body);
  const userid = req.body.userID
  // userModel.findById({_id : userid})
  // .then(
    userModel.updateMany(
      {_id : req.body.userID},
      {$push:{Favourites : req.body.Fav}})
      .then(result=> console.log(result))
      .catch(err => console.log(err))
  // .catch(
  //   console.log("some error occured")
  // )
    })
// })

app.delete('/deletefav',(req, res)=>{
  console.log(req.body)
  const userID = req.body._id
  const recipeSlug = req.body.slug
  userModel.updateOne(
    {_id: userID},
    {$pull :{Favourites:{ recipeslug: recipeSlug}}})
    .then(
      res.send({message : "Delete Successful" , alert : true , data : Favourites})
    )
    .catch(err => console.log(err))
})

app.post("/SignUp",(req, res)=>{
  console.log(req.body)
  const email = req.body.email
  console.log(email)
  userModel.findOne({email : email})
  .then(userexists =>{
    if(!userexists){
      userModel.create(req.body)
      .then(userdata =>{
        res.json(userdata)
      })
      .catch(err => console.log(err) )
    }
    else{
      res.send({message : "Email already exist. Kindly Login" , alert : true})
    }
  }
  )
});

app.post("/Login",(req, res)=>{
  const {email , password } = req.body;
  userModel.findOne({email :email})
  .then(user=>{
    if(user){
      if(user.password === password){
        const userData = {
          _id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
          Favourites : user.Favourites
        };
        res.send({message : "Login Successful" , alert : true, data: userData})
      } else {
        res.send({message : "password incorrect" , alert : false})
      }
    }
    else{
      res.json({message : "Email does not exist. Kindly register" , alert : false})
    }
  })
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          console.error(err);
      } else {
          res.send('Logout successful');
      }
  });
});

app.get('/MyProfile', (req, res) => {
  if (req.session.user) {
      res.send('Welcome to your profile');
  } else {
      res.send('Unauthorized');
  }
});

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.listen(PORT, ()=>{
    console.log("Server is running", PORT)
})
