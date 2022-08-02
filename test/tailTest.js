// Required
const tail = require(`../tail`);
const assertEqual = require(`../assertEqual`);


// Test the function of tail
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


// Test Case: Checking the orginal array is undamaged
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);