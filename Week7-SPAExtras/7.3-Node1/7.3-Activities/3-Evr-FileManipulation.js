// import the fs and path modules
const fs = require("fs");
const path = require("path");

// create a temporary directory (synchronously) with mkdtempSync
const tmp = fs.mkdtempSync("savvy-tmp");

// create a filepath to savvy-tmp/output
const filepath = path.join(tmp, "output");

// create and write to the new file: savvy-tmp/output
fs.writeFileSync(filepath, "this is content in the new file");

// read the file
const contents = fs.readFileSync(filepath, "utf-8");
console.log(contents);

// delete the temp directory
fs.rmdirSync(tmp, { recursive: true });
