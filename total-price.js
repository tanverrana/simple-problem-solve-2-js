const products = [
    { name: "laptop", price: 3200 },
    { name: "watch", price: 1200 },
    { name: "shirt", price: 500 },
    { name: "phone", price: 2200 }

];
let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log("Total Price=", totalPrice);