const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {contactUser} = require('../controllers/contactController');

router.post('/', authMiddleware, contactUser);

module.exports = router;