const cart = [
    { name: "laptop", price: 3200, quantity: 2 },
    { name: "watch", price: 1200, quantity: 3 },
    { name: "shirt", price: 500, quantity: 1 },
    { name: "phone", price: 220, quantity: 2 }

];
let totalPrice = 0;
for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
}
console.log("Total Price=", totalPrice);