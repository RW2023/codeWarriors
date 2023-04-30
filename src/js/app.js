// A wolf in sheep's clothing: Code Warriors Kata

const sheep = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];
const arr = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];

if (arr.indexOf("wolf") === arr.length - 1) {
    console.log("Pls go away and stop eating my sheep.");
} else if (arr.indexOf("wolf") !== -1) {
    const wolfIndex = arr.indexOf("wolf");
    console.log(`'Oi! Sheep number ${arr[wolfIndex + 1]} You are about to be eaten by a wolf!`);
} else {
    console.log("No wolves found in the array.");
}

// End Of A wolf in sheep's clothing