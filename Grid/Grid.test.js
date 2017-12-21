let Grid = require('./Grid');

describe('Grid ', () => {

	it('can be constructed', () => {
		let grid = new Grid(5, 5);
	});

	it('contains the correct values', () => {
		let grid = new Grid(7, 7);
		expect(grid.maxX).toBe(7);
		expect(grid.maxY).toBe(7);
		expect(grid.minX).toBe(0);
		expect(grid.minY).toBe(0);
	});

	it('can validate a position', () => {
		let grid = new Grid(5, 5);
		expect(grid.isValidPosition(10, 10)).toBe(false);
		expect(grid.isValidPosition(5, 5)).toBe(true);
	});

	it('can validate a position with negative numbers', () => {
		let grid = new Grid(5, 5);
		expect(grid.isValidPosition(-10, -10)).toBe(false);
	});

});
