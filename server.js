const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-frontend-domain.com'],
  credentials: true
}));
app.use(express.json());
app.use('/api/auth', authRoutes);

const protectedRoutes = require('./routes/protected');
app.use('/api/user', protectedRoutes);

const bookmarkRoutes = require('./routes/bookmark');
app.use('/api/bookmarks', bookmarkRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
}).catch(err => {
  console.error('MongoDB connection failed:', err.message);
});
