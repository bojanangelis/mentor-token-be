const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(e) {
        res.status(500).json({  message: e.message  })
    }
}


exports.createUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    });
    try {
        const newUser = await user.save(); 
        res.status(201).json(newUser);
    } catch(e) {
        res.status(500).json({  message: e.message  })
    }
}