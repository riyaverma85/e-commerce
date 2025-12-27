const router = require("express").Router();
const upload = require("../middlewares/uploadMiddleware");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const Product = require("../models/Product");

// Add product (Admin only)
router.post("/", protect, adminOnly, upload.single("image"), async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.path : null;
  const product = await Product.create({ name, description, price, image });
  res.json(product);
});

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Update product
router.put("/:id", protect, adminOnly, upload.single("image"), async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.filename : undefined;
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    { name, description, price, ...(image && { image }) },
    { new: true }
  );
  res.json(updated);
});

// Delete product
router.delete("/:id", protect, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = router;
