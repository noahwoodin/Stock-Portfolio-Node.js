const express = require('express');
const request = require('request');
const router = express.Router();
const portfolioController = require('../controllers/portfolio');

// Get ticker and shares from user
router.get('/', portfolioController.getAddStock);

// Add ticker and shares to portfolio
router.post('/', portfolioController.postAddStock);

// Delete ticker from portfolio
router.post('/delete', portfolioController.postDelete);

module.exports = router;