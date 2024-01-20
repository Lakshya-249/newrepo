const w = require('lodash');

const items = [1,[2,[3,[4]]]];
const flatten = w.flattenDeep(items);

console.log(flatten);