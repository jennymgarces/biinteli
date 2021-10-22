import { Router } from "express";

const router = Router();

const Product = require("../models/product");
const Provider = require("../models/provider");

router.get("/products", async (req, res) => {
  const prod = await Product.find();
  res.json(prod);
});
router.get("/providers", async (req, res) => {
  const prov = await Provider.find();
  res.json(prov);
});

router.post("/products", async (req, res) => {
  const prod = new Product(req.body);
  await prod.save();
  console.log(prod);
  res.json({
    status: "product save",
  });
});
router.get("/products/:id", async (req, res) => {
  const prod = await Product.findById(req.params.id);
  res.json(prod);
});

router.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: "product update",
  });
});

router.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({
    status: "product delete",
  });
});



export default router;
