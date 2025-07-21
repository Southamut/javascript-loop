let studentScores = [100, 20, 3, 100];
let minScore = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
    if (studentScores[i] < minScore) {
        minScore = studentScores[i];
    }
}

console.log(minScore);
