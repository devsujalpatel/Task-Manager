import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new Schema(
	{
		avatar: {
			type: {
				url: String,
				localPath: String,
			},
			default: {
				url: "https://placehold.co/400",
				localPath: "",
			},
		},
		username: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
			trim: true,
		},
		fullname: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: [true, "password is required"],
		},
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: {
			type: String,
		},
		forgotPasswordExpiry: {
			type: Date,
		},
		refreshToken: {
			type: String,
		},
		emailVerificationToken: {
			type: String,
		},
		emailVerificationExpiry: {
			type: Date,
		},
	},
	{ timestamps: true },
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
	await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = async function () {
	return jwt.sign(
		{
			_id: this._id,
			email: this.email,
			username: this.username,
		},
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: process.env.ACCESS_TOKEN_EXPIRY },
	);
};
userSchema.methods.generateRefreshToken = async function () {
	return jwt.sign(
		{
			_id: this._id,
		},
		process.env.REFRESH_TOKEN_SECRET,
		{ expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
	);
};
userSchema.methods.generateTemproryToken = async function () {
	const unHashedToken = crypto.randomBytes(20).toString("hex");
	const hashedToken = crypto
		.createHash("sha256")
		.update(unHashedToken)
		.digest("hex");
	const tokenExpiry = Date.now() + (20 * 60 * 1000);
	return { unHashedToken, hashedToken, tokenExpiry };
};

export const User = mongoose.model("User", userSchema);
