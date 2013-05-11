// var chai = require('chai')
//   , expect = chai.expect
//   , deresponsify = require('../lib/index')
//   , sinon = require('sinon')
// ;

// describe('Main Tests', function () {

//   describe('Deresponsify Object', function () {
//   	it('Should be defined', function () {
//   		expect(deresponsify()).to.not.be.undefined;
//   	});


//   	describe('#getFile()', function () {

//   		it('Should call #translateString', function (done) {
//   			var d = deresponsify();
//   			sinon.mock(d, 'translateString');
//   			d.getFile(__dirname + '/sample1.css');
//   			expect(d.translateString.calledOnce);
//   			done();
//   		});
//   	});
//   })
// });
