export default function handler(req, res) {
  if (req.method === 'POST') {
    const { password } = req.body;
    // Allow a fallback password for local dev/testing if VITE_ADMIN_PASSWORD is not set
    const validPassword = process.env.VITE_ADMIN_PASSWORD || 'geheim123';
    
    if (password === validPassword) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ error: 'Invalid password' });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
