const mongoose = require('mongoose');

const {Schema, model} = mongoose;


const UserSchema = new Schema(
{
	name: {type: String, trim: true},
	email: {type: String, required: true, unique: true, trim: true},
	password: {type: String, required: true},
	date: {type: Date, default: Date.now}
}
	);

module.exports = model('Users', UserSchema);

