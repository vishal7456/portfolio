const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
});

// Apply rate limiting to all requests
app.use(limiter);

// CORS configuration with security headers
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json());

// HSTS (HTTP Strict Transport Security) - ONLY enable this in production after HTTPS is fully configured
// This header tells browsers to always use HTTPS for your domain for a specified period.
// Max-Age is in seconds (e.g., 31536000 seconds = 1 year)
// includeSubDomains is optional, but recommended if all subdomains are HTTPS
// preload is optional, but allows your domain to be hardcoded into browsers
// Security headers middleware
app.use((req, res, next) => {
  // Content Security Policy
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src 'self';");
  
  // HTTP Strict Transport Security
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  // Other security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Secure cookie settings (if cookies are used)
  if (req.headers.cookie) {
    res.cookie = {
      ...res.cookie,
      secure: true,
      httpOnly: true,
      sameSite: 'strict'
    };
  }
  
  next();
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // In a real application, you would send this data to an email service
  // or save it to a database.
  console.log('Received contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});