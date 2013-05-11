var chai = require('chai')
  , expect = chai.expect
  , fs = require('fs')

  , parser = require('../lib/css-parser')
  , beautifier = require('../lib/css-beautifier')
;
 
describe('css-parser Object', function () {

  describe('#css()', function () {
    it('Should take css string', function (done) {

      fs.readFile(__dirname + '/sample1.css', function (err, file) {
        var str = file.toString()
          , css = parser.css(str);
        //console.log(css);
        done();
      })
      
    })
  });

  describe('#getConditions()', function () {
    it('Should object with correct properties', function () {
      var str = '@media screen and (min-width: 1024px) and (max-width: 1368px) {'
      , result = parser.getConditions(str);
      expect(result).to.have.deep.property('[0].critical','min');
      expect(result).to.have.deep.property('[0].range','width');
      expect(result).to.have.deep.property('[0].value', 1024);
      expect(result).to.have.deep.property('[0].measure', 'px');
      expect(result).to.have.deep.property('[0].full', 'min-width: 1024px');
      expect(result).to.have.deep.property('[1].critical', 'max');  
    })  
  });

  describe('#getBlockEndPoint()', function () {
    it('Should return the endpoint of a css block, when passed simple block', function () {
      var str = '.something {\n\tdisplay : block;\n}';
      result = parser.getBlockEndPoint(str);
      expect(result).to.equal(32);
    });

    it('Should return the endpoint of a css block, when passed media query block', function () {
      var str = '@media screen and (min-width: 768px) {\n\t.something-else {\n\t\twidth: 300px;\n\t\theight: 500px;\n\t}\n}';
      result = parser.getBlockEndPoint(str);
      expect(result).to.equal(95);
    });
  });




});
