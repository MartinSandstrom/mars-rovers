# Mars rover

## Usage

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

## Assumptions

* Robot cannot fall off the curiously rectangular plateau.
* Should I create a grid and pass it to the robot and create a new robot everytime from input?

## Design choises

* Ambivalent if the grid should have been its own object and created and reused by every rover. Since there were no visual output on the grid, maxX and maxY was used to calculate the grid.

* Decided to build all parts of the application modular for reusability.
