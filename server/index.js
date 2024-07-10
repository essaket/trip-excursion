require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const db = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const agencyRoutes = require("./routes/agencyRoutes");
const tripRoutes = require("./routes/tripsRoutes");
const bookingRoutes = require("./routes/bookingsRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/users", userRoutes);
app.use("/api/agencies", agencyRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/api/cities", async (req, res) => {
  try {
    const [cities] = await db.query("SELECT `city_id`, `name` FROM `Cities`");
    res.json(cities);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res
      .status(500)
      .json({ error: "Error fetching cities", details: error.message });
  }
});

app.get("/api/trips", async (req, res) => {
  console.log("Received request for trips");
  try {
    const cityId = req.query.city_id;
    console.log("Requested city_id:", cityId);

    let query = "SELECT `trip_id`, `title`, `city_id` FROM `Trips`";
    let params = [];

    if (cityId) {
      query += " WHERE `city_id` = ?";
      params.push(cityId);
    }

    console.log("Executing query:", query);
    console.log("With parameters:", params);

    const [trips] = await db.query(query, params);

    console.log("Fetched trips:", trips);

    res.json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({
      error: "Error fetching trips",
      details: error.message,
    });
  }
});

app.get("/test", (req, res) => {
  console.log("Test route hit");
  res.send("Test route working");
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
