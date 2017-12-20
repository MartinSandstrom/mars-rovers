const NASARoverPlacer = require('./NASARoverPlacer');
let inputData = {
	maxY: 5,
	maxX: 5,
	rovers:
	[{ x: 1, y: 2, f: 'N', roverDirections: 'LMLMLMLMM' },
	{ x: 3, y: 3, f: 'E', roverDirections: 'MMRMMRMRRM' }]
}

describe('NASARoverPlacer ', () => {
	it('can be constructed', () => {
		let walker = new NASARoverPlacer();
	});

	it('can be parseData correct', () => {
		let walker = new NASARoverPlacer();
		let output = walker.placeRovers(inputData);
		expect(output.length).toBe(2);
		expect(output[0]).toBe('1 3 N');
		expect(output[1]).toBe('5 1 E');
	});
});
