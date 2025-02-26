import axios from 'axios';

export default async function handler(req, res) {
  const { city, type } = req.query; // Accept both city and type (daily or weekly)
  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  const apiUrl = type === 'monthly' 
    ? `https://muslimsalat.com/${encodeURIComponent(city)}/monthly/3.json`
    : `https://muslimsalat.com/${encodeURIComponent(city)}/3.json`;

  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}
