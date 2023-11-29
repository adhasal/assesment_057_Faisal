import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import BarangRoute from "./routes/BarangRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(BarangRoute);


app.listen(5000, ()=> console.log('server up and running'));