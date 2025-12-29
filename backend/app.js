// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { createAdminIfNotExists } = require('./controllers/authController');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const productRoutes =require("./routes/productRoutes")
const orderRoutes =require("./routes/orderRoutes")
const cartRoutes = require("./routes/cartRoutes");
const contactRoutes = require("./routes/contactRoutes");




const app = express();
app.use(cors());
app.use(express.json());

connectDB().then(() => createAdminIfNotExists());

app.get('/', (req, res) => res.send('API running'));
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/products',productRoutes)
app.use('/api/orders',orderRoutes)
app.use("/api/cart", cartRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server running on', PORT));
