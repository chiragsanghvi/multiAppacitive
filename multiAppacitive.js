modules.exports = function () {
	var path = require.resolve('appacitive');
	delete require.cache[require.resolve(path)];

	var Appacitive = require(path);
	delete require.cache[require.resolve(path)];

	Appacitive.config.apiBaseUrl = "http://apis.appacitive.com/";
	return Appacitive;
};