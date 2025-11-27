import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors({ origin: "http://localhost:3000" })); // allow your frontend
app.use(express.json());

app.post("/api/leads", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  // saving temp int files
  const lead = req.body;
  fs.appendFileSync("leads.json", JSON.stringify(lead) + "\n");

  // Logging / saving / forwarding to CRM happens here
  console.log("📩 New Lead Submitted:");
  console.log({ name, email, phone, message });

  return res.status(200).json({ success: true, message: "Lead received" });
});

app.listen(4000, () => console.log("🚀 API running on port 4000"));
