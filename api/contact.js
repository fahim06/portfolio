import { handleContact } from "../server/contactHandler.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }
  const ip =
    (req.headers["x-forwarded-for"] &&
      req.headers["x-forwarded-for"].split(",")[0]) ||
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    "unknown";

  const result = await handleContact(req.body ?? {}, ip);
  res.status(result.status).json(result.json);
}
