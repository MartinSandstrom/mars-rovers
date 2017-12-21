let MarsRover = require('./MarsRover');
let rover = {};

describe('Rover - basic functions', () => {

	beforeEach(() => {
		rover = new MarsRover(4, 4);
		rover.place(1, 1, 'N');
	});

	it('can be constructed', () => {
		let testRover = new MarsRover(5, 5);
	});

	it('can be placed', () => {
		rover.place(1, 1, 'N');
	});

	it('throw error for invalid facing', () => {
		try {
			rover.place(1, 1, 'RANDOM_FACEING');
		}
		catch (e) {
			expect(e.message).toBe('Invalid faceing');
		}
	});

	it('throw error for invalid position X', () => {
		try {
			rover.place(0, 5, 'N');
		}
		catch (e) {
			expect(e.message).toBe('Invalid position');
		}
	});


	it('throw error for invalid position Y', () => {
		try {
			rover.place(5, 0, 'N');
		}
		catch (e) {
			expect(e.message).toBe('Invalid position');
		}
	});

	it('can be send a report', () => {
		let expectedReport = '1 1 N';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can rotate left', () => {
		rover.left();
		let expectedReport = '1 1 W';
		let report = rover.report();
		expect(report).toBe(expectedReport);

		rover.left();
		expectedReport = '1 1 S';
		report = rover.report();
		expect(report).toBe(expectedReport);

		rover.left();
		expectedReport = '1 1 E';
		report = rover.report();
		expect(report).toBe(expectedReport);

		rover.left();
		expectedReport = '1 1 N';
		report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can rotate right', () => {
		rover.right();
		let expectedReport = '1 1 E';
		let report = rover.report();
		expect(report).toBe(expectedReport);

		rover.right();
		expectedReport = '1 1 S';
		report = rover.report();
		expect(report).toBe(expectedReport);

		rover.right();
		expectedReport = '1 1 W';
		report = rover.report();
		expect(report).toBe(expectedReport);

		rover.right();
		expectedReport = '1 1 N';
		report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can move', () => {
		rover.move();
		let expectedReport = '1 2 N';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can move north', () => {
		rover.moveNorth();
		let expectedReport = '1 2 N';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can move west', () => {
		rover.left();
		rover.moveWest();
		let expectedReport = '0 1 W';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can move south', () => {
		rover.left();
		rover.left();
		rover.moveSouth();
		let expectedReport = '1 0 S';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can move east', () => {
		rover.right();
		rover.moveEast();
		rover.moveEast();
		let expectedReport = '3 1 E';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('cannot move north if on the edge', () => {
		rover.moveNorth();
		rover.moveNorth();
		rover.moveNorth();
		rover.moveNorth();
		rover.moveNorth();
		let expectedReport = '1 4 N';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('cannot move west if on the edge', () => {
		rover.left();
		rover.moveWest();
		rover.moveWest();
		rover.moveWest();
		rover.moveWest();
		rover.moveWest();
		let expectedReport = '0 1 W';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('cannot move south if on the edge', () => {
		rover.right();
		rover.right();
		rover.moveSouth();
		rover.moveSouth();
		rover.moveSouth();
		rover.moveSouth();
		rover.moveSouth();
		let expectedReport = '1 0 S';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('cannot move east if on the edge', () => {
		rover.right();
		rover.moveEast();
		rover.moveEast();
		rover.moveEast();
		rover.moveEast();
		rover.moveEast();
		let expectedReport = '4 1 E';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can move without falling off the grid', () => {
		rover.move();
		rover.move();
		rover.move();
		rover.move();
		rover.move();
		rover.move();
		let expectedReport = '1 4 N';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});
});

describe('Rover - nothing allowed before placed', () => {
	it('can not report if not placed', () => {
		try {
			let testrover = new MarsRover(4, 4);
			testrover.report();
		}
		catch (e) {
			expect(e.message).toBe('Rover has to be positioned before any other command can be used');
		}
	});
	it('can not move if not placed', () => {
		try {
			let testrover = new MarsRover(4, 4);
			testrover.move();
		}
		catch (e) {
			expect(e.message).toBe('Rover has to be positioned before any other command can be used');
		}
	});
	it('can not go left if not placed', () => {
		try {
			let testrover = new MarsRover(4, 4);
			testrover.left();
		}
		catch (e) {
			expect(e.message).toBe('Rover has to be positioned before any other command can be used');
		}
	});
	it('can not go right if not placed', () => {
		try {
			let testrover = new MarsRover(4, 4);
			testrover.right();
		}
		catch (e) {
			expect(e.message).toBe('Rover has to be positioned before any other command can be used');
		}
	});
});

describe('Rover - examples', () => {

	it('can run example A', () => {
		rover.place(0, 0, 'N');
		rover.move();
		let expectedReport = '0 1 N';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can run example B', () => {
		rover.place(0, 0, 'N');
		rover.left();
		let expectedReport = '0 0 W';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

	it('can run example C', () => {
		rover.place(1, 2, 'E');
		rover.move();
		rover.move();
		rover.left();
		rover.move();
		let expectedReport = '3 3 N';
		let report = rover.report();
		expect(report).toBe(expectedReport);
	});

});
