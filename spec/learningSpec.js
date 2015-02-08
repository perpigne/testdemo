describe('jasmine specs', function () {
	it('should assert correct behaviors', function () {
		expect(true).toBe(true);
	});

	it('should assert incorrect behaviors', function () {
		expect(false).not.toBe(true);
	});

	describe('loading calculator module', function () {
		var calculator = require('../scripts/Calculator');

		it('should give access to add function', function () {
			expect(calculator.add(1,2)).toBe(3);
		});

		it('should give access to substract function', function () {
			expect(calculator.substract(5, 6)).toBe(-1);
		});

		it ('should give access to multiply function', function () {
			expect(calculator.multiply(2,3)).toBe(6);
		});

	});
});