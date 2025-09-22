const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const connectDB = require("./config/db.config");
const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
