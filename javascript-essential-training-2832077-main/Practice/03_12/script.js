/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";
const everydayPack = new Backpack (
    "Everday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false
);

const dorabackpack = new Backpack (
    "Dora's Backpack",
    50,
    3,
    20,
    20,
    true
);

console.log("The everdayPack object:", everydayPack , dorabackpack);
console.log("The pocketNum value:", everydayPack.pocketNum ,"&", dorabackpack.pocketNum);