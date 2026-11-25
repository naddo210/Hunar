export default function handler(req, res) {
  res.status(200).json({ success: true, message: 'Client API ESM test works!', nodeVersion: process.version });
}
