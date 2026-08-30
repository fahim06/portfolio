import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { handleContact } from "./server/contactHandler.js";

function contactApiPlugin() {
  return {
    name: "contact-api-dev",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed." }));
          return;
        }
        try {
          const data = JSON.parse((await readBody(req)) || "{}");
          const ip =
            (req.headers["x-forwarded-for"] && req.headers["x-forwarded-for"].split(",")[0]) ||
            req.socket?.remoteAddress ||
            "unknown";
          const result = await handleContact(data, ip);
          res.statusCode = result.status;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result.json));
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Invalid request body." }));
        }
      });
    },
  };
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  for (const key of ["EMAIL_USER", "EMAIL_PASS", "EMAIL_TO"]) {
    if (!process.env[key] && env[key]) process.env[key] = env[key];
  }

  return {
    plugins: [react(), contactApiPlugin()],
    server: { port: 3000, open: process.env.DEV_OPEN !== "false" },
  };
});
