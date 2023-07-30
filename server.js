const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

// dot config
dotenv.config();

// MongoDb Connection
connectDB();

// Creating Rest Object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
// 1 test Route
app.use("/api/v1/test", require("./routes/testRoutes")); // Work as a middleware
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// accessing static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Creating a port
const PORT = process.env.PORT || 8080;

// Listen -> Running the Application
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Port ${process.env.PORT}`
      .bgBlue.white
  );
});
