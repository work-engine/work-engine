const passport = require("passport");
const AmazonStrategy = require("passport-amazon").Strategy;
const util = require("util");
const User = require("./models/userModel.js");
const Keys = require("../config/keys.js");
// passport.serializeUser( function(user,done){
// 	done(null, user); 
// }); 
// passport.deseralizeUser( function(id, done){
// 	User.findById(id)
// 	.then(user => {
// 		done(null, user)}
// 	); 
// });


passport.use(new AmazonStrategy(
	{
		clientID: Keys.clientId,
		clientSecret: Keys.clientSecret,
		callbackURL: "http://localhost:3000/auth/amazon/callback"
	}, 
	async (req, accessToken, refreshToken, profile, done)=>{
		console.log("ACESSTOKEN:::::::::: ", accessToken);
		console.log("REFRESHTOKEN::::::::::::::::::", refreshToken);
		console.log("PROFILE:::::::::::::::", profile);
		done(null, profile);
		// const existingUser = await User.findOne({amazonID: profile});
		// if(existingUser){
		// 	done(null, existingUser);
		// }
		// const user = await new User({amazonID: profile.id}).save();
		
	}		
));

