let DataParser = require('./DataParser');
let dataParser = {};
let testData =
	`5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`;

let expectedObject = {
	maxY: 5,
	maxX: 5,
	rovers:
	[{ x: 1, y: 2, f: 'N', roverDirections: 'LMLMLMLMM' },
	{ x: 3, y: 3, f: 'E', roverDirections: 'MMRMMRMRRM' }]
}

describe('DataParser ', () => {

	beforeEach(() => {
		dataParser = new DataParser();
	});

	it('can be constructed', () => {
		let testParser = new DataParser();
	});

	it('can be parse data correct', () => {
		let parsedData = dataParser.parse(testData);
		expect(parsedData.maxX).toBe(5);
		expect(parsedData.maxY).toBe(5);
		expect(parsedData.rovers.length).toBe(2);
	});

	it('can get the rovers from the instruvtions', () => {
		let testDataArray = testData.split('\n').filter(Boolean);
		testDataArray.shift();
		let rovers = dataParser.getRovers(testDataArray);
		expect(rovers.length).toBe(2);
	});
});
