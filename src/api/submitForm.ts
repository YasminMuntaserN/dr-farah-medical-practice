import type { VercelRequest, VercelResponse } from "@vercel/node";
import formidable from "formidable";

export const config = {
  api: { bodyParser: false }, 
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res.status(500).json({ message: "Error parsing form" });
    }

    try {
      // Send parsed fields to Formspree
      const response = await fetch("https://formspree.io/f/xvzpgdva", {
        method: "POST",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error("Error submitting to Formspree:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
}
