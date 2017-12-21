let Grid = require('../Grid/Grid.js');
let Direction = require('../Direction/Direction.js');

class MarsRover {
	constructor(maxX, maxY) {
		this.grid = new Grid(maxX, maxY);
		this.direction = new Direction();
		this.hasBeenPlaced = false;
	}

	place(x, y, f) {
		if (this.direction.directions.includes(f)) {
			this.direction.setFacing(f);
		} else {
			throw Error('Invalid faceing');
		}
		if (!this.grid.isValidPosition(x, y)) {
			throw Error('Invalid position');
		}
		this.x = x;
		this.y = y;
		this.hasBeenPlaced = true;
	}

	notPlacedError() {
		throw Error('Rover has to be positioned before any other command can be used');
	}

	report() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		return `${this.x} ${this.y} ${this.direction.f}`;
	}

	move() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		switch (this.direction.f) {
			case 'N':
				this.moveNorth();
				break;
			case 'S':
				this.moveSouth();
				break;
			case 'W':
				this.moveWest();
				break;
			case 'E':
				this.moveEast();
				break;
		}
	}

	moveNorth() {
		let y = parseInt(this.y) + 1;
		if (this.grid.isValidPosition(this.x, y)) {
			this.y++;
		}
	}

	moveSouth() {
		let y = parseInt(this.y) - 1;
		if (this.grid.isValidPosition(this.x, y)) {
			this.y--;
		}
	}

	moveWest() {
		let x = parseInt(this.x) - 1;
		if (this.grid.isValidPosition(x, this.y)) {
			this.x--;
		}
	}

	moveEast() {
		let x = parseInt(this.x) + 1;
		if (this.grid.isValidPosition(x, this.y)) {
			this.x++;
		}
	}

	right() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		this.direction.right();
	}

	left() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		this.direction.left();
	}
}

module.exports = MarsRover;
