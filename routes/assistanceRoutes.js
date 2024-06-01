const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {assistenceUser} = require('../controllers/assistanceController');

router.post('/', authMiddleware, assistenceUser);

module.exports = router;