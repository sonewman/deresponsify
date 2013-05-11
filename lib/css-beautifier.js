var cssBeautify = module.exports = {}
	, multipleTabs = /\t+/g
  , bracketTabs = /\t*\}/g
  , whiteSpaceMatcher = /([\t\s])/g
;


cssBeautify.simple = function (css) {
	if (typeof css !== 'string') css = '';
	return css.replace(multipleTabs, '\t').replace(bracketTabs, '}');
};


cssBeautify.minify = function (css) {
	if (!css) return '';
	return css.replace(whiteSpaceMatcher, '');
};


cssBeautify.comb = function (css) {
	//	this will remove redundant styles -- eventually
};