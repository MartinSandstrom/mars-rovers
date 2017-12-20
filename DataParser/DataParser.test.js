const DataParser = require('./DataParser');
let parser = {};
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
	it('can be constructed', () => {
		let testParser = new DataParser();
	});

	it('can be parseData correct', () => {
		parser = new DataParser();
		let parsedData = parser.parse(testData);
		expect(parsedData.maxX).toBe(5);
		expect(parsedData.maxY).toBe(5);
		expect(parsedData.rovers.length).toBe(2);
	});
});
