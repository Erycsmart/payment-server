import express from "express";

const app = express();
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Server working 🚀");
});

// Test route
app.get("/test", (req, res) => {
  res.send("Server + env working ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on " + PORT));
