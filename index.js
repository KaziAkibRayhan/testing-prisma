const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// Database connection check
prisma.$connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Middleware to parse JSON requests
app.use(express.json());

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
