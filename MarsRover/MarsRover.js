class MarsRover {
	constructor(maxX, maxY) {
		this.maxY = maxY;
		this.maxX = maxX;
		this.x = 0;
		this.y = 0;
		this.hasBeenPlaced = false;
		this.directions = ['N', 'E', 'S', 'W'];
	}

	place(x, y, f) {
		if (this.directions.includes(f)) {
			this.f = f;
		} else {
			throw Error('Invalid faceing');
		}
		if (!this.isValidPosition(x, y)) {
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
		return `${this.x} ${this.y} ${this.f}`;
	}

	move() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		switch (this.f) {
			case 'N':
				if (this.isValidPosition(this.x, parseInt(this.y) + 1)) {
					this.y++;
				}
				break;
			case 'S':
				if (this.isValidPosition(this.x, parseInt(this.y) - 1)) {
					this.y--;
				}
				break;
			case 'W':
				if (this.isValidPosition(parseInt(this.x) - 1, this.y)) {
					this.x--;
				}
				break;
			case 'E':
				if (this.isValidPosition(parseInt(this.x) + 1, this.y)) {
					this.x++;
				}
				break;
		}
	}

	right() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		let currentIndex = this.getCurrentIndexOfF();
		currentIndex++;
		this.f = this.getDirection(currentIndex, 0);
	}

	left() {
		if (!this.hasBeenPlaced) {
			return this.notPlacedError();
		}
		let currentIndex = this.getCurrentIndexOfF();
		currentIndex--;
		this.f = this.getDirection(currentIndex, 3);
	}

	getDirection(currentIndex, defaultIndex) {
		return this.directions[currentIndex] ? this.directions[currentIndex] : this.directions[defaultIndex];
	}

	isValidPosition(x, y) {
		return (x >= 0 && x <= this.maxX) && (y >= 0 && y <= this.maxY) ;
	}

	getCurrentIndexOfF() {
		return this.directions.indexOf(this.f);
	}
}

module.exports = MarsRover;
