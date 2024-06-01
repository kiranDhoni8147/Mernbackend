// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', authMiddleware, getUsers);

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Public
router.get('/:id', getUserById);

// @route   POST /api/users
// @desc    Create a user
// @access  Public
router.post('/', createUser);

// @route   PUT /api/users/:id
// @desc    Update a user
// @access  Public
router.put('/:id', updateUser);

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Public
router.delete('/:id', deleteUser);

module.exports = router;
