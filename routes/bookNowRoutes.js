const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {bookuser} = require('../controllers/BookController');

router.post('/', authMiddleware, bookuser);

module.exports = router;