import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  try {
    const data = req.body; 
    const response = await fetch("https://formspree.io/f/xvzpgdva", {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    res.status(response.status).json(result);
  } catch (err) {
    console.error("Error submitting form:", err);
    res.status(500).json({ message: "Server error" });
  }
}
