import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/leads", (req, res) => {
  const { name, email, phone, message } = req.body;
  // Basic validation (improve as needed)
  if (!name || !email || !phone)
    return res.status(400).json({ error: "Missing fields" });
  console.log("Lead:", req.body);
  res.json({ success: true });
});

app.listen(4000, () => console.log("API running on port 4000"));
