// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let n of scores) { 
    if (minScore === undefined) {
        minScore = n
    } else if (n < minScore) {
        minScore = n
    }
}
console.log(minScore);