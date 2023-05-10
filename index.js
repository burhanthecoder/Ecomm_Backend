
    import express from "express";
    import mongoose, { Mongoose } from "mongoose";
    import dotenv from "dotenv";
    import cors from "cors";
    import bodyParser from "body-parser";
    import user from "./models/user";
    import Product from "./models/product";
    const app = express();
    dotenv.config();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use("/user", user);
    app.get("/", (req, res) => {
      res.send("Hello World");
    });
    
    app.use("product", Product);
    mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }
      

    );