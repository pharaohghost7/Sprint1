const express = require('express');

const Users = require('../models/Users');

const router = express.Router();


//routes

router.get('', async (req, res) =>{
	const User = await Users.find();
	console.log(User);
	res.json(User);
});

router.post('',  async(req, res) =>{
	const {name, email, password, confirm_password} = req.body;

	const newUser = new Users({
		name, email, password
	})
	console.log(newUser);
	// await newUser.save();
	res.redirect('/');
});


module.exports = router;

