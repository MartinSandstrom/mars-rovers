
class MarsRover {
	constructor(direction, grid) {
		this.grid = grid;
		this.direction = direction;
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
		if (this.grid.isValidPosition(this.x, this.y + 1)) {
			this.y++;
		}
	}

	moveSouth() {
		if (this.grid.isValidPosition(this.x, this.y - 1)) {
			this.y--;
		}
	}

	moveWest() {
		if (this.grid.isValidPosition(this.x - 1, this.y)) {
			this.x--;
		}
	}

	moveEast() {
		if (this.grid.isValidPosition(this.x + 1, this.y)) {
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
