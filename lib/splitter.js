var mqMatcher = /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/
  , mqMatcherGlobal = /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi
  , mqDeclaration = /@media[^\{]+\{/
  , mqConditions = /\((min|max)-(width|height)\s*:\s*([\w\W]+)\)/gi
  , mqValues = /(min|max)-(width|height)\s*:\s*([\w]+)/
;


module.exports = exports = function () {
  return new splitter();
};

function splitter () {};


splitter.prototype.splitBlocks = function (css) {
  var ret, splitCss, matchedMQs
    , i, j, splitLen, matchLen;
    
  ret = [];
  splitCss = css.split(mqMatcher);
  matchedMQs = css.match(mqMatcherGlobal);

  splitLen = splitCss.length;
  matchLen = matchedMQs.length;  

  for (i = 0; i < splitLen; i++) {
    if (splitCss[i] !== '') {
      ret.push(splitCss[i]);
    }
    
    if (matchedMQs && matchedMQs[i]) {
      ret.push(matchedMQs[i]);
    }
  }
  
  return ret;
};

//splitter.prototype.
