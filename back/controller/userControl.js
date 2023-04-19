const util = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const catchAsync = require("../utils/catchHandle");
const AppError = require("../utils/appError");


const generateJwt = async (user, res) => {
	const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "7h",
	});
    
	// Remove password
	if (user.password) {
		user.password = undefined;
	}

	res.cookie("jwt", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production" ? true : false,
		expires: new Date(
			Date.now() + 7 * 24 * 60 * 60 * 1000
		),
	});

	res.status(200).json({
		status: "success",
		token,
		data: {
			user,
		},
	});
};

exports.register = catchAsync(async (req, res, next) => {
	const userInfo = {
        username: req.body.username,
        email: req.body.email,
		password: req.body.password,
	};

	const newUser = await User.create(userInfo);

	await generateJwt(newUser, res);
});


exports.signin = catchAsync(async (req, res, next) => {
	const { username, password } = req.body;

	const foundUser = await User.findOne({ email }).select("+password");

	if (!foundUser) {
		throw new AppError("Invalid username Please try again!", 404);
	}

	const checked = await foundUser.comparePassword(password, foundUser.password);

	if (!checked) {
		throw new AppError("Invalid  password. Please try again!", 404);
	}

	await generateJwt(foundUser, res);
});


exports.protect = catchAsync(async (req, res, next) => {
	let token = "";
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt;
	}

	if (!token) {
		throw new AppError("Please login to access!", 400);
	}

	const payload = await util.promisify(jwt.verify)(
		token,
		process.env.JWT_SECRET
	);

	const user = await User.findById(payload.id);
	if (!user) {
		throw new AppError("This user does not exist.", 404);
	}

	req.user = user;
	res.locals.user = user;
	next();
});





exports.logout = (req, res, next) => {
	res.cookie("jwt", "loggedout", {
		expires: new Date(Date.now() + 10),
	});

	res.status(200).json({
		status: "success",
	});
};