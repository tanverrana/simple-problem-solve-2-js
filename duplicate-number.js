const number = [23, 56, 23, 56, 23, 56, 78, 24, 12, 75, 65, 75];
function duplicateNumber(number) {
    const unique = []; //new array--> number array theke ekta ekta element k check kore new array te push korteci,
    for (const element of number) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const getUniqueNumber = duplicateNumber(number);
console.log(getUniqueNumber);