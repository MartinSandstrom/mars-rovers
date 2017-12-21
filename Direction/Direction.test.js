let Direction = require('./Direction');
let direction = {};

describe('Direction ', () => {

	beforeEach(() => {
		direction = new Direction();
	});

	it('can be constructed', () => {
		let direction = new Direction();
	});

	it('contains the correct values', () => {
		expect(direction.directions.length).toBe(4);
	});

	it('can set the correct faceing', () => {
		direction.setFacing('N');
	});

	it('can get index of currect facing', () => {
		direction.setFacing('N');
		let index = direction.getCurrentIndexOfF();
		expect(index).toBe(0);
	});

	it('can get the correct direction', () => {
		direction.setFacing('N');
		let currentIndexOfF = direction.getCurrentIndexOfF();
		let d = direction.getDirection(currentIndexOfF, 3);
		expect(d).toBe('N');
	});

	it('can get the correct direction when hitting the end', () => {
		let currentIndexOfF = 4;
		let d = direction.getDirection(currentIndexOfF, 0);
		expect(d).toBe('N');
	});

	it('can get the correct direction when hitting the start', () => {
		let currentIndexOfF = -1;
		let d = direction.getDirection(currentIndexOfF, 3);
		expect(d).toBe('W');
	});

	it('move left', () => {
		direction.setFacing('N');
		direction.left();
		expect(direction.f).toBe('W');
		direction.left();
		expect(direction.f).toBe('S');
		direction.left();
		expect(direction.f).toBe('E');
		direction.left();
		expect(direction.f).toBe('N');
	});

	it('move right', () => {
		direction.setFacing('N');
		direction.right();
		expect(direction.f).toBe('E');
		direction.right();
		expect(direction.f).toBe('S');
		direction.right();
		expect(direction.f).toBe('W');
		direction.right();
		expect(direction.f).toBe('N');
	});

});
