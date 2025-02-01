import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const jwt_secret = process?.env?.JWT_SECRET ?? 'r92qur9dsnf2h9pqfmds9af8a2urj9djfa32thisistemp'
	const token = jwt.sign({ userId }, jwt_secret, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;
