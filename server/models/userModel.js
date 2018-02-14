const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	amazonID: String,
});

module.exports = mongoose.model("UserModel", UserSchema);