var product = {
    id: "123",
    name: "Product Name",
    price: 100,
    quantity: 10
};

for (let property in product) {
    console.log(`${property}: ${product[property]}`);
}