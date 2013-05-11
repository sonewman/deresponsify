var parser = module.exports = {}
  , beaut = require('./css-beautifier')

  , defaultSize = 1024
  , media = /@media/
  , mediaStart = /^@media/
    //  match media query bracketed conditions
  , mqConditions = /\((min|max)-(width|height)\s*:\s*([^\)]+)\)/gi
  //  match media query bracketed values
  , mqValues = /(min|max)-(width|height)\s*:\s*([0-9]+)([\w]*)/
  , mqDeclaration = /@media[^\{]+\{[\n\t\s]*/
  , trailingBracket = /\}[\t\s\n]*$/

  , multipleTabs = /\t+/g
  , bracketTabs = /\t*\}/g

;

parser.css = function (css, size) {
  var _this = this, endPoint, newCss
    , newCssArr = [], splitCss = [];

  size = typeof size === 'number' ? size : defaultSize;
  css = css.split(media);

  css.forEach(function (value, i, css) {
    var lastCharIndex = (value.length - 1), current, next;
    if (i > 0) {
      value = '@media' + value;
      endPoint = _this.getBlockEndPoint(value);
      if (endPoint <= lastCharIndex) {
        console.log()
        current = value.substring(0, endPoint);
        next = value.substring((endPoint + 1));
        splitCss.push(current, next);
      } else {
        splitCss.push(value);
      }
    } else {
      splitCss.push(value);
    }
  });

  splitCss.forEach(function (value, i, css) {
    var conditions, res, innerStartPos, inner;
    if (i > 0 && value.match(mediaStart)) {
      conditions = _this.getConditions(value);
      if (conditions.length) {
        res = conditions.some(function (condition) {
          return (condition.critical === 'min' &&  condition.value <= size) 
            || (condition.critical === 'max' && condition.value >= size);
        });

        if (!res) return;
        inner = value.replace(mqDeclaration, '').replace(trailingBracket, '');
        inner = beaut.simple(inner);
        newCssArr.push(inner);
      }
    } else {
      newCssArr.push(value);
    }
  });

  return newCssArr.join('\n');
};

parser.getBlockEndPoint = function (css) {
  var i, l, c, depthCount = 0
    , open = '{', close = '}';
  
  for (i = 0; c = css[i]; i++) {
    if (c === open) {
      depthCount += 1;
    } else if (c === close) {
      depthCount -= 1;
      if (depthCount === 0) {
        return (i + 1);
      }
    }
  }
  return i - 1;
}


parser.getConditions = function (block) {
  var i, l, ret = [], condition
    , conditions = block.match(mqConditions) || [];

  for (i = 0, l = conditions.length; i < l; i++) {
    condition = conditions[i].match(mqValues);
    if (condition) {
      ret.push({
        critical : condition[1]
        , range : condition[2]
        , value : parseFloat(condition[3])
        , measure : condition[4]
        , full : condition[0]
      });
    }
  }
  return ret;
};


// parser.getPositions = function (css) {
//   var depthCount = 0, out = [], outIndex = 0
//     , open = '{', close = '}', i, l;
  
//   for (i = 0, l = css.length; i<l; i++) {

//     if (css[i] === open) {
//       depthCount += 1;
//       if (depthCount === 1) {
//         out[outIndex] = [i + 1];
//       }
//     } else if (css[i] === close) {
//       depthCount -= 1;
//       if (depthCount === 0) {
//         out[outIndex].push(i);
//         outIndex += 1;
//       }
//     }
//   }
//   return out;
// };


