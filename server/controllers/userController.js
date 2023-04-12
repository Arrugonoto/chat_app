const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// generate JWT
const createToken = _id => {
   return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' });
};

// create account
// @route POST /api/users/signup
// @ access Public
const signupUser = async (req, res, next) => {
   const { name, email, password, color } = req.body;

   try {
      // check if user with that name or email already exists
      const nameExists = await User.findOne({ name });
      const userExists = await User.findOne({ email });

      if (nameExists) {
         throw new Error('Account with that name already exists');
      }
      if (userExists) {
         throw new Error('Account with that email address already exists');
      }

      // protect password
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      // create User
      const user = await User.create({
         name,
         email,
         password: hashed,
         color,
      });

      // check if data was succesfully send
      if (user) {
         res.status(201).json({
            name: user.name,
            email: user.email,
            _id: user.id,
            token: createToken(user._id),
            color: user.color,
         });
      } else {
         throw new Error('Invalid user data');
      }
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

// login user
// @route POST /api/users/login
// @access Public
const loginUser = async (req, res, next) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email });

   try {
      if (!email || !password) {
         throw new Error('Please fill all fields');
      }
      if (!user) {
         throw new Error("Account with that email address doesn't exists");
      }

      // check password correctness
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
         throw new Error('Incorrect password');
      }

      if (user && match) {
         res.json({
            name: user.name,
            email: user.email,
            _id: user.id,
            token: createToken(user._id),
            color: user.color,
         });
      } else {
         throw new Error('Invalid user data');
      }
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

module.exports = {
   signupUser,
   loginUser,
};
