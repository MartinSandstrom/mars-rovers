let fs = require('fs');
let DataParser = require('./DataParser/DataParser.js');
let dataParser = new DataParser();
let MarsRover = require('./MarsRover/MarsRover.js');

fs.readFile("testDataBig.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	let parsedData = dataParser.parse(data);
	parsedData.rovers.forEach(ri => {
		let rover = new MarsRover(parsedData.maxX, parsedData.maxY);
		rover.place(ri.x, ri.y, ri.f);
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
		let report = rover.report();
		console.log(report);
	});
});
