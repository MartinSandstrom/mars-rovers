# Mars rovers

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

* Rover cannot fall off the curiously rectangular plateau but ignored calls that would result in a fall off
* Rover cannot move or report before being placed
* Rover cannot be placed outside of the initial grid
* Rover can take one command at the time and not an array of commands
* Created a new rover for every instrcution even though it could have reused the same rover and placed it on a new spot. Assuming that it was a lot of rovers and not one rover with a lot of instructions

## Design choises

* Ambivalent if the grid should have been its own object and created and reused by every rover. Since there were no visual output on the grid, maxX and maxY was used to calculate the grid

* Decided to build all parts of the application modular for reusability, testability

## Library choises

* Jest; is just elegant and easy, it scales really good for building more complex tests in the future without any additional packages. Jest is also super fast, no one like to spend a minute waiting for the tests to pass

## Todos / improvements

* Refactor the dataparser and write more tests
* Overall refactoring
* Build a grid and send it as inuput to the Rover to walk on
* Build visual graphics
* Change the rover to take the array of commands and not be single instructed?
