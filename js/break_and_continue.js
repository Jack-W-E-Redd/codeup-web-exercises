while (true) {
    var randomNumber = parseInt(prompt(" Give me an odd number between 1 and 50. "));
    if (randomNumber % 2 !== 0 && randomNumber <= 50 && randomNumber >= 1) {
        break;
    }
}

console.log(" Skip this number: " + randomNumber);

for (var i = 1; i <= 50; i+=2) {
    if (i === randomNumber) {
        console.log(' Skipping number ' + i);
        continue;
    }
    console.log(' Odd number ' + i);
}