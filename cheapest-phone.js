const phones = [
    { name: "samsung", price: 45000, camera: 8, storage: 64 },
    { name: "iphone", price: 145000, camera: 10, storage: 128 },
    { name: "shawmi", price: 25000, camera: 8, storage: 32 },
    { name: "walton", price: 15000, camera: 8, storage: 8 },
];

let cheapest = phones[0];
for (const mobile of phones) {
    if (mobile.price < cheapest.price) {
        cheapest = mobile;
    }
}
console.log(cheapest);