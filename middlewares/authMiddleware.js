const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // Extract the token from the Authorization header
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            console.log('No Authorization header found'); // Debug: Missing header
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Check if the header is in the correct format
        const token = authHeader.split(' ')[1];
        if (!token) {
            console.log('No token in Authorization header'); // Debug: Token missing in header
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Verify the token
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Verified User:', verifiedUser); // Debug: Log verified user

        // Attach the user to the request object
        req.user = verifiedUser;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Token verification error:', error.message); // Debug: Log verification errors
        res.status(400).json({ message: 'Invalid token' });
    }
};
