# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

```
npm install @navycuda/lotide
```

**Require it:**

```javascript
const _ = require('@navycuda/lotide');
```

**Call it:**

```javascript
const results = _.tail([1, 2, 3]) // => [2, 3]
```

## Documentation

The following functions are currently implemented:
```
Please note that the majority of the unit testing was not converted from simple functions to mocha/chai.
```

* `head([])` : Returns the first element of an array.
* `tail([])` : Returns an array with everything except the first element.
* `middle([])` : Returns an array with either one or two elements from the middle.
* `countLetters('')` : Returns an object with a count of all the characters excluding spaces.
* `countOnly([], {})` : Counts the number of instances a key with the value of true exists within the supplied array.
* `letterPositions('')` : Returns an index of all the characters and an array of their positions within the string.
* `eqArrays([],[])` : (x,y) => eqValue(x,y)
* `eqObjects({},{})` : (x,y) => eqValue(x,y)
* `eqValue(any,any)` : Universal, recursive function for compairing values.
* `flatten(array)` : Flattens nested arrays into one flat array.
* `findKey({},()=>{})` : Searches an object for a key using a callback function.
* `map([],()=>{})` : Does work to array items according to the callback.
* `findKeyByValue({},'')` : Finds an object key by a search value
* `without([],[])` : Removes elements from the first array if they exist in the second.  Current implementation only supports primatives.
* `takeUntil([],()=>{})` : Builds an array up until the callback is satisfied.
* `outputToConsole(err,any)` : Used to output simple things to the console.
* `getRandomAlphanumericString(length)` : Generates a random alphanumeric string to length.
* `circularNumbers(position, change, limit)` : Advances or Retards position by change within the limit, reseting to opposite value at extents.
* `makeStringSafe(string, safeString)` : Rebuilds strings with only the characters available in safeString  