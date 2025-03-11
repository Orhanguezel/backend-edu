import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors(
    {
        origin: ["http://127.0.0.1:5500"],
    }
));



const messages = [];

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res, next) => {
  if (!req.body.message) {
    // return res.status(400).json({error: 'Message is required'});
    let error = new Error("Message is required");
    error.status = 400;
    return next(error);
  } //const {message} = req.body;
  try {
    messages.push(req.body);
    return res.status(201).json(messages);
  } catch (error) {
    return next(error);
  }
});

// Global Error handling
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  return res.status(status).json({ error: err.message });
});

// Error handling
app.use((req, res) => {
    res.status(404).json({ error: 'Page not found' });
});


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
