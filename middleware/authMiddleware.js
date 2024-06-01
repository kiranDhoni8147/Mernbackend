// backend/middlewares/authMiddleware.js
const authMiddleware = (req, res, next) => {
    // Dummy auth logic
    console.log('Auth middleware');
    next();
};

module.exports = authMiddleware;
