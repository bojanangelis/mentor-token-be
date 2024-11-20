const User = require('../models/User');
const bcrypt = require('bcrypt'); //npm install bcrypt
const jwt = require('jsonwebtoken'); // npm install jsonwebtoken

const SECRET_KEY = 'SUPPER_SECRET_KEY'

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
    const saltRounds = 10; // Defines the cost factor for hashing
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
   // userot gi vnesol ovie vrednosti i nie gi zapishuvame vo baza
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
    });
    try {
        //tuka e zapishuvanjeto vo baza user.save()
        const newUser = await user.save();
        res.status(201).json(newUser)
    } catch(e) {
        res.status(500).json({  message: e.message  })
    }
}

exports.login = async (req, res) => {
    console.log('enter login contorller')
    try {
    // ovde pravime proverka samo na email dali imame user so ovoj email na primer
    // miki.stojanoski@gmail.com
    const user = await User.findOne({email: req.body.email});
    console.log('this is user-->', user)
    // ako go nemame togash vrajkame status 404 
    if(!user) return res.status(404).json({message: 'User with this email is not found.'});
    // nareden cekor ni e da proverime dali passwordot e tocen ili greshen
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if(!isMatch)  return res.status(404).json({message: 'Invalid password.'});

    const token = jwt.sign({
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email
    }, SECRET_KEY, 
    { expiresIn: '1h'} )

    res.status(200).json({
        message: 'Login successfully',
        token,
        user
    })
    }
    catch(e){
        console.log('errorr!!!')
        res.status(500).json({ message: e.message })
    }
}

exports.getUserByID = async (req, res) => {
    try {
        const user = await User.findById(req.params._id);
        if(!user) {
            return res.status(404).json({message: 'User not found'})
        }
        res.status(200).json(user);
    }
    catch(e) {
        res.status(400).json({  message: e.message  })
    }
}


 //     // tuka sega ako e se okej kreirame jwt
    //     const token = jwt.sign({
    //         name: newUser.name,
    //         email: newUser.email,
    //         role: newUser.role,
    //     }, SECRET_KEY,
    //     { expiresIn: '1h' }
    // )
        
    // ova ni e response. 
    // ova go vrajkame ako e se uspeshno
        // res.status(201).json({
        //     message: 'User created successfully.',
        //     token,
        //     user: newUser
        // });