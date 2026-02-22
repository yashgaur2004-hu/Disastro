import express from "express";
import cors from "cors";
import { World } from "./src/core/World";
import { AgentManager } from "./src/agents/AgentManager";

const app = express();
app.use(cors());
app.use(express.json());

const world = new World({});
const agentManager = new AgentManager(world);

let running = true;

// Main simulation loop
setInterval(() => {
  if (running) {
    world.update(0.016);
  }
}, 16);

// Endpoint Zynd will call
app.post("/command", (req, res) => {
  const { type } = req.body;

  console.log("Received command:", type);

  if (type === "pause") running = false;
  if (type === "resume") running = true;

  if (type === "fire") {
    world.triggerDisaster?.("fire");
  }

  if (type === "flood") {
    world.triggerDisaster?.("flood");
  }

  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("YASHH engine control running on http://localhost:3000");
});