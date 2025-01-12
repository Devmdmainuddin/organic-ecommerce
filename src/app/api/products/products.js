import productData from "../../httpActions/product/data.js";

export default function handler(req, res) {
  res.status(200).json(productData);
}