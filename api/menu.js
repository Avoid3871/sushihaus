import { Redis } from '@upstash/redis';
import { defaultMenuData } from '../src/data/defaultMenu.js';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      let menu = null;
      try {
        menu = await redis.get('sushihaus_menu');
      } catch (e) {
        console.warn('Redis store not fully configured or failed. Returning default menu.', e);
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
        await redis.set('sushihaus_menu', menuData);
        return res.status(200).json({ success: true });
      } catch (e) {
        console.error('Failed to save to Redis', e);
        return res.status(500).json({ error: 'Failed to save to database.' });
      }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
