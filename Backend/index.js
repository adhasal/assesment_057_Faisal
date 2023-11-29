import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import BarangRoutes from "./routes/BarangRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

// Use UserRoute for user-related routes
app.use("/users", UserRoute);

// Use BarangRoutes for barang-related routes
app.use("/barang", BarangRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
