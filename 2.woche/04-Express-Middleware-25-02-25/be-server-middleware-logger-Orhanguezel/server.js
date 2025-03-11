import express from "express";
import fs from "fs";
import logger from "./middleware/logger.js";

const app = express();
const PORT = 5009;

app.use(express.json());
app.use(logger);

const travelData = JSON.parse(fs.readFileSync("./travel.json", "utf8"));

app.get("/travel", (req, res) => {
  res.json(travelData);
});

app.get(
  "/search/:destination?/:minPrice?/:maxPrice?/:duration?/:available?",
  (req, res) => {
    let { destination, minPrice, maxPrice, duration, available } = req.params;
    let results = travelData;

    // Destination filter
    if (destination) {
      results = results.filter((trip) =>
        trip.destination.toLowerCase().includes(destination.toLowerCase())
      );
    }

    // Min price
    if (minPrice) {
      results = results.filter((trip) => trip.price >= Number(minPrice));
    }

    // Max price
    if (maxPrice) {
      results = results.filter((trip) => trip.price <= Number(maxPrice));
    }

    // Duration
    if (duration) {
      results = results.filter((trip) => trip.duration.includes(duration));
    }

    // Available
    if (available !== undefined) {
      results = results.filter(
        (trip) => trip.available === (available === "true")
      );
    }

    // Results
    res.json(results);
  }
);

app.post("/subscribe", (req, res) => {
  res.send("Subscribe");
});

app.post("/createBooking", (req, res) => {
  res.send("Create Booking");
});
app.patch("/update", (req, res) => {
  res.send("Update");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
