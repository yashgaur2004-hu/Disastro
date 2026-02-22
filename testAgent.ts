import { DisasterAgent } from "./agents/disasterAgent";

async function main() {
  const agent = new DisasterAgent();

  const result = await agent.run({
    city: "patna"
  });

  console.log("AGENT RESULT:");
  console.log(result);
}

main();