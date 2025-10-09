const express =require("express");
const loginAdmin =require  ("../controllers/adminController");

const router = express.Router();
router.post("/login", loginAdmin.loginAdmin);

module.exports = router;
