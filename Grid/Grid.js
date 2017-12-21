class Grid {
	constructor(maxX, maxY) {
		this.maxX = maxX;
		this.maxY = maxY;
		this.minX = 0;
		this.minY = 0;
	}
	isValidPosition(x, y) {
		return (x >= this.minY && x <= this.maxX) && (y >= 0 && y <= this.maxY) ;
	}
}

module.exports = Grid;
