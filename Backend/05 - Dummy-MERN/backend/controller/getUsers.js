const User = require("../models/User");
exports.getUser = async (req, res) => {
	try {
		const userData = await User.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
