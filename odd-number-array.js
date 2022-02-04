function oddNumber(number) {
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element % 2 != 0) {
            console.log(element);
        }

    }
    return number;
}

const number = [12, 34, 21, 234, 331, 12, 41, 51, 112, 31];
const number2 = [12, 341, 211, 2341, 3311, 121, 41, 51, 112, 31];
const getOddNumber = oddNumber(number);
oddNumber(number2);

