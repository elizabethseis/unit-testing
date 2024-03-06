# Unit Test Project

This project is for unit testing.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/elizabethseis/unit-testing.git
npm install
```

To run the tests, use the following npm script:
```bash
npm test
```

To generate test coverage report, run:
```bash
npm run coverage
```

To lint the code, run:
```bash
npm run lint
```

## Tests Overview

### NumbersValidator

#### `isNumberEven`

**Test cases:**
- Should return true if the number is even.
- Should return false if the number is odd.
- Should throw an error when provided a string.

#### `getEvenNumbersFromArray`

**Test cases:**
- Should return an array of even numbers.
- Should return an empty array if there are no even numbers.
- Should throw an error when provided a non-array.
- Should throw an error when provided an array with non-numbers.

#### `isAllNumbers`

**Test cases:**
- Should return true if all elements in the array are numbers.
- Should return false if any element in the array is not a number.
- Should throw an error when provided a non-array.

#### `isInteger`

**Test cases:**
- Should return true when passed an integer.
- Should return false when passed a non-integer.
- Should throw an error when passed a non-number.


## Dependencies

- [c8](https://www.npmjs.com/package/c8) - Code coverage tool
- [mocha](https://www.npmjs.com/package/mocha) - Testing framework
- [mochawesome](https://www.npmjs.com/package/mochawesome) - Reporting tool

## Dev Dependencies

- [eslint](https://www.npmjs.com/package/eslint) - Linter
- [eslint-config-google](https://www.npmjs.com/package/eslint-config-google) - Google's JavaScript style guide

## License

This project is licensed under the [ISC License](LICENSE).



