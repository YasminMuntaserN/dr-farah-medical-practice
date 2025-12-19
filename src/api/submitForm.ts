import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const response = await fetch("https://formspree.io/f/xvzpgdva", {
      method: "POST",
      body: req.body, 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Error submitting form:", err);
    res.status(500).json({ message: "Server error" });
  }
}
