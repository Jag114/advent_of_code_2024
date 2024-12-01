const fs = require("node:fs");

function readData(wordLength) {
  let left = [];
  let right = [];
  let clearData = [];
  let completeData = [];
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

    let word = "";
    for (let x = 0; x < clearData.length; x++) {
      if (x % wordLength == 0 && word.length > 0) {
        completeData.push(word);
        word = "";
      }
      word += clearData[x];
    }
    completeData.push(word);
    completeData = completeData.map((e) => {
      return Number(e, 10);
    });
    
    for (let i = 0; i < clearData.length; i++) {
      if (completeData[i] !== undefined) {
        if (i % 2 == 0) {
          left.push(completeData[i]);
        } else {
          right.push(completeData[i]);
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
  return [left, right];
}

let [left, right] = readData(5);
let similarity = 0;
left.sort();
right.sort();
for (let i = 0; i < left.length; i++) {
  //change for part1
  /*
  similarity += Math.abs(left[i] - right[i]);
  */
  const chosenNr = left[i];
  let copyCount = 0;
  for(let j = 0; j < right.length; j++){
    if(chosenNr == right[j]) copyCount++;
  }
  similarity += chosenNr * copyCount;
}
console.log(similarity);
