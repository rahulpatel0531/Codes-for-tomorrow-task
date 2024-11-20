const jwt = require('jsonwebtoken')

exports.verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({message:"Unauthorized"});
    }

    var decoded = jwt.verify(token, 'codes-for-tomorrow');
    req.user = decoded;
    next();
}