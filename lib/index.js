var defaults = {
		value: 1024
		, measure : 'px'
	}
	, fs = require('fs')

	, parser = require('./css-parser')
	, beaut = require('./css-beautifier')
;

module.exports = function () {
	return new Deresponsify();
};

function Deresponsify () {

};


Deresponsify.prototype.parseFile = function (path, callback) {
	return fs.readFile(path, function (err, file) {
		this.translateString(file.toString());
	}.bind(this));
};


Deresponsify.prototype.translateString = function (str) {
	//return splitter
};

