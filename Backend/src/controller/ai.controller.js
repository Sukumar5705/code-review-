const aiService = require('../services/ai.service.js');



module.exports.getReview = async (req, res) => {
	const code = req.body.code;
	if (!code) return res.status(400).send('Code is required');
	try {
		const response = await aiService(code);
		res.send(response);
	} catch (err) {
		console.error('Error in getReview:', err.message || err);
		res.status(500).send('Failed to process the code review');
	}
};
