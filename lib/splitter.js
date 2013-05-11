  //  match media query
var mqMatcher = /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/i

  //  match media query block globaly
  , mqMatcherGlobal = /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi

  //  match media query declaration
  , mqDeclaration = /@media[^\{]+\{/

  //  match media query bracketed conditions
  , mqConditions = /\((min|max)-(width|height)\s*:\s*([^\)]+)\)/gi

  //  match media query bracketed values
  , mqValues = /(min|max)-(width|height)\s*:\s*([0-9]+)([\w]*)/

  , media = /@media/
 
;


module.exports = {

  splitBlocks : function (css) {
    var ret, splitCss, matchedMQs
      , i, splitLen, matchLen, total
      , splitConditions
    ;
      
    ret = [];

    //  split css on media query blocks
    //  so we can extract the css which is not inside
    //  a media query
    //splitCss = css.split(mqMatcher);

    // css.replace(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi, function (g) {
    //   console.log(g);
    //   return g;
    // });

    //  match media query blocks to get the block
    //matchedMQs = css.match(mqMatcherGlobal);

    //  get length of split array,
    //splitLen = splitCss.length;
    //matchLen = matchedMQs ? matchedMQs.length : 0;
    
    //total = splitLen >= matchLen ? splitLen : matchLen;
    //

    //  loop through the array of plain css,
    //  on each split is where the media query block
    //  slots in
    // for (i = 0; i < total; i++) {

    //   //  if it is not an empty string  
    //   if (splitCss[i] !== '') {
    //     //  we want to save this css
    //     //ret.push(splitCss[i]);
    //   }
      
    //   //  
    //   if (matchedMQs && matchedMQs[i]) {




    //     splitConditions = this.getConditions(matchedMQs[i]);
    //     splitConditions.mq = true;
    //     ret.push(matchedMQs[i]);
    //   }
    // }
    return ret;
  }


};