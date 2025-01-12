import categoryData from "../../httpActions/category/data.js";

export default function handler(req, res) {
  res.status(200).json(categoryData);
}