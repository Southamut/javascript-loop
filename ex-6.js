// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let n = companyName.length; n >= 0; n--) {
    if (companyName[n] !== undefined) {
        reversedCompanyName = reversedCompanyName += companyName[n]
    }
}
console.log(reversedCompanyName);