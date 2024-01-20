const {readFile, writeFile} = require("fs");

console.log("Start...");

readFile("./content/subfolder/test.txt","utf8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    // console.log(first);
    readFile("./content/proto.txt","utf8",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = data;
        // console.log(second);
        writeFile("./content/result.txt",`Here is ur answer : ${first} and ${second}...`,{flag: "a"},(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            // console.log(result);
            console.log("Done with this task...");
        });
    })
})

console.log("Starting the next task...");