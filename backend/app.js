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

const app = express();
app.use(cors());
app.use(express.json());

connectDB().then(() => createAdminIfNotExists());

app.get('/', (req, res) => res.send('API running'));
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/products',productRoutes)
app.use('/api/orders',orderRoutes)


console.log("Cloudinary Config:", process.env.CLOUDINARY_CLOUD_NAME);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server running on', PORT));
