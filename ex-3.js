// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
//Start coding here
for (let i=1;i<scores.length;i++) {
    if (minScore === undefined || scores[i] < minScore) {
        minScore = scores[i]
    }
}

console.log(minScore);
