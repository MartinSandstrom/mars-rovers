let MarsRover = require('../MarsRover/MarsRover.js');
let Direction = require('../Direction/Direction.js');
let Grid = require('../Grid/Grid.js');

class NASARoverPlacer {
	placeRovers(parsedData) {
		let grid = new Grid(parsedData.maxX, parsedData.maxY);
		return parsedData.rovers.map(ri => {
			let direction = new Direction();
			let rover = new MarsRover(direction, grid);
			rover.place(ri.x, ri.y, ri.f);
			this.runRoverInstructions(ri, rover);
			return rover.report();
		});
	}
	runRoverInstructions(ri, rover) {
		ri.roverDirections.split('').forEach((instruction) => {
			switch (instruction) {
				case 'M':
					rover.move();
					break;
				case 'L':
					rover.left();
					break;
				case 'R':
					rover.right();
					break;
			}
		});
	}
}

module.exports = NASARoverPlacer;
