# Mars rover

## Usage

To run the project with you test data. Update testData.txt with your input and run npm start from the console.

### General usage

To use this app you need to install NodeJS and NPM.

### Install

```console
    $ npm install
```

### Run testData.txt

```console
    $ npm start
```

### Test

```console
    $ npm test
```

## Assumptions and thoughts

* Robot cannot fall off the curiously rectangular plateau but ignored calls that would result in a fall off
* Created a new rover for every instrcution even though it could have reused the same rover and placed it on a new spot. Assuming that it was a lot of rovers and not one rover with a lot of instructions.

## Design choises

* Ambivalent if the grid should have been its own object and created and reused by every rover. Since there were no visual output on the grid, maxX and maxY was used to calculate the grid

* Decided to build all parts of the application modular for reusability, testability

## Library choises

* Jest is just elegant and easy, it scales really good for building more complex tests in the future without any additional packages. Jest is also super fast, no one like to spend a minute waiting for the tests to pass
