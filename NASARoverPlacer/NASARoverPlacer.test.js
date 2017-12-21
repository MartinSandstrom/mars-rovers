let NASARoverPlacer = require('./NASARoverPlacer');
let MarsRover = require('../MarsRover/MarsRover.js');
let nasaRoverPlacer = {};

let inputData = {
	maxY: 5,
	maxX: 5,
	rovers:
	[{ x: 1, y: 2, f: 'N', roverDirections: 'LMLMLMLMM' },
	{ x: 3, y: 3, f: 'E', roverDirections: 'MMRMMRMRRM' }]
}

describe('NASARoverPlacer ', () => {

	beforeEach(() => {
		nasaRoverPlacer = new NASARoverPlacer();
	});

	it('can be constructed', () => {
		let testNasaRoverPlacer = new NASARoverPlacer();
	});

	it('can be place rovers correct', () => {
		let output = nasaRoverPlacer.placeRovers(inputData);
		expect(output.length).toBe(2);
		expect(output[0]).toBe('1 3 N');
		expect(output[1]).toBe('5 1 E');
	});

	it('can run the instructions correctly', () => {
		let rover = new MarsRover(5, 5);
		rover.place(0, 0, 'N')
		nasaRoverPlacer.runRoverInstructions(inputData.rovers[0], rover);
		let report = rover.report();
		expect(report).toBe('1 2 N');
	});

});
