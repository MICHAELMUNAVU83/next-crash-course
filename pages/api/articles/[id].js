import { articles } from "../../../data";

export default function handler(req, res) {
  req.query.id = req.query.id.toString();
  const filtered = articles.filter((article) => article.id === req.query.id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${req.query.id} is not found` });
  }
}
