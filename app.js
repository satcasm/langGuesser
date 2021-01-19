const franc = require("franc"),
    langs = require("langs");
require("colors");
const sentence = process.argv[2];
const key = franc(sentence);
const result = langs.where("3", key);
if (result === undefined)
    console.log("No matching language found.Please try again!".red);
else
    console.log(`Our best guess is: ${result.name}`.green);