const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// =========================
// Connect MongoDB
// =========================
connectDB();

// =========================
// Security Middleware
// =========================
app.use(helmet());
app.disable('x-powered-by');

// =========================
// CORS Configuration
// =========================
const corsOptions = {
  origin: ['https://rltedzaro.com', 'https://www.rltedzaro.com', 'http://localhost:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ← Added OPTIONS
  allowedHeaders: ['Content-Type', 'Authorization'], // ← Added explicitly
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// =========================
// Body Parser
// =========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
// Request Time Logger
// =========================
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} - ${Date.now() - start}ms`);
  });

  next();
});

// =========================
// Health Check Route
// =========================
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'Server Running',
    timestamp: new Date(),
  });
});

// =========================
// API Routes
// =========================
app.use('/api', require('./routes/careerRoutes'));
app.use('/api', require('./routes/contactRoutes'));
app.use('/api', require('./routes/registerRoutes'));
app.use('/api', require('./routes/enrollRoutes'));

// =========================
// Root Route
// =========================
app.get('/', (req, res) => {
  res.send('🚀 API Running...');
});

// =========================
// 404 Handler
// =========================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// =========================
// Global Error Handler
// =========================
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
});

// =========================
// Start Server
// =========================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
