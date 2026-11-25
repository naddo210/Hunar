module.exports = (req, res) => {
  res.status(200).json({ success: true, source: 'root api/test.js', nodeVersion: process.version });
};
