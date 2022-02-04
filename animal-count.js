function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityThirdRestMiles = 100;
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimal = animalDensityFirst10Miles * 10;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimal = firstDenseAnimal + secondDenseAnimals;
        return totalAnimal;

    }
    else {
        const firstDenseAnimal = animalDensityFirst10Miles * 10;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const thirdRestMiles = miles - 20;
        const ThirdDenseAnimals = thirdRestMiles * animalDensityThirdRestMiles;
        const totalAnimals = firstDenseAnimal + secondDenseAnimals + ThirdDenseAnimals;
        return totalAnimals;
    }
}
const animal = animalCount(35);
console.log(animal);

