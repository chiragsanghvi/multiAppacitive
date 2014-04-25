exports.Appacitive = function () {
	
	var path = require.resolve('appacitive');
	delete require.cache[require.resolve(path)];

	var Appacitive = require(path);
	delete require.cache[require.resolve(path)];

	return Appacitive;
};
