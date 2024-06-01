const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./backend/config/database.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// DB setup omitted for brevity
connectDB();

// API routes
app.use('/api/users', require('./backend/routes/userRoutes.js'));

app.use('/api/booknow', require('./backend/routes/bookNowRoutes.js'));

app.use('/api/getAssistence', require('./backend/routes/assistanceRoutes.js'));

app.use('/api/contactnow', require('./backend/routes/contactNowRoutes.js'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
