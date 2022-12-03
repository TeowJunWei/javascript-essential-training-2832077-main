/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const backpack = {
    name: "Everday Backpack",
    volume: 30,
    color: "grey",
    pockeyNum: 15,
    strapLenght:{
    left:26,
    right:26,
    },
};

console.log("Backpack Object:",backpack);
console.log("Strap Length L:",backpack.strapLenght.left);