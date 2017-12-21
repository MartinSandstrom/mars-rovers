class Direction {
	constructor() {
		this.directions = ['N', 'E', 'S', 'W'];
		this.f = -1;
	}

	getDirection(currentIndex, defaultIndex) {
		return this.directions[currentIndex] ? this.directions[currentIndex] : this.directions[defaultIndex];
	}

	getCurrentIndexOfF() {
		return this.directions.indexOf(this.f);
	}

	setFacing(f) {
		this.f = f;
	}

	left() {
		let currentIndex = this.getCurrentIndexOfF();
		currentIndex--;
		this.f = this.getDirection(currentIndex, 3);
	}
	right() {
		let currentIndex = this.getCurrentIndexOfF();
		currentIndex++;
		this.f = this.getDirection(currentIndex, 0);
	}
}

module.exports = Direction;
