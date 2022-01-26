export default function handler(req, res) {
  // res.statusCode = 200;
  // res.json({ name: null });
  res.status(200).json({ name: req.cookies.a_name });
}
