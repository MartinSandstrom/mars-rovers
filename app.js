let fs = require('fs');
let DataParser = require('./DataParser/DataParser.js');
let dataParser = new DataParser();
let NasaRoverPlacer = require('./NasaRoverPlacer/NasaRoverPlacer.js');
let nasaRoverPlacer = new NasaRoverPlacer();

fs.readFile("testData.txt", "utf8", function (error, data) {
	if (error) {
		console.log('Error reading the testData', error);
	}
	let parsedData = dataParser.parse(data);
	let outputData = nasaRoverPlacer.placeRovers(parsedData);
	outputData.forEach( output => console.log(output));
});
