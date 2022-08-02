// Required
const assertEqual = require(`../assertEqual`);
const eqValue = require(`../eqValue`);
const eqArrays = require(`../eqArrays`);
const eqObjects = require(`../eqObjects`);

// Testing
const test0 = [ 1, 2 ];
const test1 = [ 2, 2 ];
const test2 = [ 2, 2 ];

const light0 = [{ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }];
const light1 = [{ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }];
const light2 = [{ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }];

const nested0 = [[[2, 3], [4]], [[2, 3], [4]]];
const nested1 = [[[2, 3], [4]], [[2, 3], [4, 5]]];
const nested2 = [[[2, 3], [4]], [[2, 3], 4]];

const object0 = {
  name: 'object0',
  id: 0x80020000,
  output: () => console.log(this.name)
};
const object1 = {
  name: 'object1',
  id: 0x80020000,
  output: () => console.log(this.name)
};
const object2 = {
  name: 'object0',
  id: 0x800202C0,
  output: () => console.log(this.name)
};
const object3 = {
  name: 'object0',
  id: 0x80020000,
  output: () => console.log(`Hello ${this.name}`)
};
const object00 = {
  name: 'object0',
  id: 0x80020000,
  output: () => console.log(this.name)
};

console.log(`primatives`);
assertEqual(eqValue(test0[0],test0[1]), false);
assertEqual(eqValue(test1[0],test1[1]), true);

console.log(`arrays`);
assertEqual(eqArrays(test0, test1), false);
assertEqual(eqArrays(test1, test2), true);

console.log(`nested arrays`);
assertEqual(eqArrays(nested0[0], nested0[1]), true);
assertEqual(eqArrays(nested1[0], nested1[1]), false);
assertEqual(eqArrays(nested2[0], nested2[1]), false);

console.log(`objects`);
assertEqual(eqObjects(light0[0],light0[1]), true);
assertEqual(eqObjects(light1[0],light1[1]), false);
assertEqual(eqObjects(light2[0],light2[1]), false);

console.log(`objects, complex`);
assertEqual(eqObjects(object0, object00), true);
assertEqual(eqObjects(object0, object1), false);
assertEqual(eqObjects(object0, object2), false);
assertEqual(eqObjects(object0, object3), false);
