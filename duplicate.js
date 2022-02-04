const names = ["Tanver", "Rana", "Sobur", "Shakib", "Mash", "Tammim", "Tammim", "Tanver", "Sobur"];
function removerDuplicate(names) {
    const unique = [];
    /*  for (let i = 0; i < names.length; i++) {
         const element = names[i];
         console.log(element);
     } */
    // For loop Shortest version ---> for of 
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removerDuplicate(names);
console.log(uniqueNames);