const db = require('../models/index');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User = db.users;


// Register a user with email and password
exports.register = async (req, res) => {
    const { email, password } = req.body
    try {
        const hashpassword = bcrypt.hashSync(password, 8);
        const user = await User.create({ email, password: hashpassword });
        res.status(201).json({ user })
    } catch (error) {
        console.log('Register User Error : ', error);
        res.status(500).json({ message: "Something went wrong" })
    }
}

// Login a user with email and password
exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email: email } });

        if (user == null) {
            return res.status(404).json({ message: "Invalid email address" });
        }
        let isMatch = await bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Password" });
        }        
        
        // Generate jwt token
        let token = await jwt.sign({
            id: user.id,
            email: email,
          }, 'codes-for-tomorrow', { expiresIn: '12h' });

        res.status(200).json({ token })
    } catch (error) {
        console.log('Create User Error : ', error);
        res.status(500).json({ message: "Something went wrong" })
    }
}