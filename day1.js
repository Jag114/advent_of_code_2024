const fs = require("node:fs");

function readData(wordLength) {
  let left = [];
  let right = [];
  let clearData = [];
  try {
    const data = fs.readFileSync("day1_input.txt", "utf8");

    for (let i = 0; i < data.length; i++) {
      clearData.push(data[i]);
    }

    clearData = clearData.filter((e) => {
      if (
        e.charCodeAt(0) != 32 &&
        e.charCodeAt(0) != 13 &&
        e.charCodeAt(0) != 10
      ) {
        return true;
      }
      return false;
    });
    console.log(clearData)//cut word after wordLength
    for (let i = 0; i < clearData.length; i++) {
      if (i % 2 == 0) {
        left.push(clearData[i]);
      } else {
        right.push(clearData[i]);
      }
    }
  } catch (err) {
    console.error(err);
  }
  return [left, right];
}

let [left, right] = readData(5);
let sum = 0;
left.sort();
right.sort();
for (let i = 0; i < left.length; i++) {
  sum += Math.abs(left[i] - right[i]);
}
console.log(sum)
