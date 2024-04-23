import express from "express";
// import { PORT  } from "./";
import mongoose, { Mongoose } from "mongoose";
import { config } from "dotenv";
import https from "https";
//below we import the schema
import User from "./model/user.js";
import cors from "cors";
config();

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (request, response) => {
  
    return response.status(234).json("welcome to Lesotho's first job search platform");
  }); //to help us retrieve data from a server

// since working with mongoose is an async process we use "async"
app.post("/signup", async (request, response) => {
    try {
        
      if (
        !request.body.email 
       
      ) {
        return response.status(400).send({
          message: "send all required fields: email, employment Type ",
        });
      }
  
      //below we are going to hash the password
    //   const hashedPassword = await bcrypt.hash(request.body.password, 5);
  
      //below we create a variable for your new book
      const newUser = {
       
        email : request.body.email,
       
      };
  
      //await user user and check if they exit
      const user = await User.create(newUser);
  
      return response.status(201).send(user);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });


  app.get("/registered-users", async (request, response) => {
    try {
      const users = await User.find({});
  
      return response.status(200).json({
      
        data: users,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });



  //mongoose will help us establish connection to the database
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("App connected to the database");

    //we put the line below here because we want the server to run only when we have connection to the database
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });