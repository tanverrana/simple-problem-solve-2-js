function divisibleNumber(number) {
    if (number % 5 == 0) {
        console.log("Football");
    }
    else if (number % 3 == 0) {
        console.log("Cricket");
    }
    else if (number % 5 == 0 && number % 3 == 0) {
        console.log("Volyball");
    }
    else {
        console.log("Kono Khela khelbo na");
    }
}
divisibleNumber(35);