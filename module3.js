const name_val = require("./module2");
const new_func = require("./module1");
const new_data = require("./module4");

require("./different_module");

console.log(name_val);

console.log(name_val.value1);

new_func(name_val.value2);

console.log(new_data.item);
console.log(new_data.item[0]);

console.log(new_data.value);
console.log(new_data.value.name);