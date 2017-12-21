class DataParser {
	parse(input) {
		//Filter boolean for removing blank lines
		let instructions = input.split('\n').filter(Boolean);
		let firstInstruction = instructions.shift();
		let maxX = parseInt(firstInstruction.split(' ')[0]);
		let maxY = parseInt(firstInstruction.split(' ')[1]);
		let rovers = this.getRovers(instructions);
		return {
			maxY,
			maxX,
			rovers
		}
	}
	getRovers(instructions) {
		let rovers = [];
		for(let i = 0; i < instructions.length; i = i + 2) {
			let roverPlacement = instructions[i].split(' ');
			let roverDirections = instructions[i + 1];
			let roverObj = {
				x: parseInt(roverPlacement[0]),
				y: parseInt(roverPlacement[1]),
				f: roverPlacement[2],
				roverDirections
			};
			rovers.push(roverObj);
		}
		return rovers;
	}
}

module.exports = DataParser;
