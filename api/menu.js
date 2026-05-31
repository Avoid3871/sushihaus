import { kv } from '@vercel/kv';
import { defaultMenuData } from '../src/data/defaultMenu.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      let menu = null;
      try {
        // Fallback checks if kv is configured (might throw if URL is missing)
        menu = await kv.get('sushihaus_menu');
      } catch (e) {
        console.warn('KV store not fully configured or failed. Returning default menu.');
      }
      
      if (!menu) {
        menu = defaultMenuData;
      }
      return res.status(200).json(menu);
    } 
    
    if (req.method === 'POST') {
      const { password, menuData } = req.body;
      
      if (password !== process.env.VITE_ADMIN_PASSWORD && password !== 'geheim123') {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      try {
        await kv.set('sushihaus_menu', menuData);
        return res.status(200).json({ success: true });
      } catch (e) {
        console.error('Failed to save to KV', e);
        return res.status(500).json({ error: 'Failed to save to database. Is Vercel KV configured?' });
      }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
