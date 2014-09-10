module.exports = function(app, middleware) {
	app.use('/topics', require('./topics')(middleware));

	app.get('/ping', function(req, res) {
		res.json(200, {
			status: 'ok',
			message: 'pong'
		});
	});

	app.use(function(req, res) {
		// Catch-all
		res.json(404, {
			status: 'error',
			message: 'Invalid API call'
		});
	});

	return app;
};