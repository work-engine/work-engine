const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

// userSchema.pre('save', function(next) {
//   this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
//   next();
// });

const UserSchema = new Schema({
  username: String,
  amazonID: String
});

module.exports = mongoose.model('UserModel', UserSchema);
