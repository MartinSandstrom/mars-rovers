let MarsRover = require('../MarsRover/MarsRover.js');

class NASARoverPlacer {
	placeRovers(parsedData) {
		return parsedData.rovers.map(ri => {
			let rover = new MarsRover(parsedData.maxX, parsedData.maxY);
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
