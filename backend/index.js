import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/leads", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const lead = req.body;
  fs.appendFileSync("leads.json", JSON.stringify(lead) + ",\n");

  console.log("New Lead Submitted:", lead);

  return res.status(200).json({ success: true });
});

// Render uses PORT from env
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
