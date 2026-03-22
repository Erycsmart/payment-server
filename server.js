import express from "express";

const app = express();
app.use(express.json());

/* ================= HOME ================= */
app.get("/", (req, res) => {
  res.send("Server working 🚀");
});

/* ================= TEST ================= */
app.get("/test", (req, res) => {
  res.send("Server + env working ✅");
});

/* ================= PESAPAL TOKEN ================= */
app.get("/token", async (req, res) => {
  try {
    const response = await fetch("https://pay.pesapal.com/v3/api/Auth/RequestToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET
      })
    });

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting token");
  }
});

/* ================= START SERVER ================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on " + PORT));
