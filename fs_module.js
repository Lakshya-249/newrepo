const {readFileSync, writeFileSync} = require("fs");

console.log("Start...");

const first = readFileSync("./content/subfolder/test.txt","utf8");
const second = readFileSync("./content/proto.txt","utf8");

console.log(first);
console.log(second);

writeFileSync("./content/result.txt",`The total result is ${first} and ${second}`,{flag:"a"});

console.log("Done this task...");
console.log("Sarting with next task...");