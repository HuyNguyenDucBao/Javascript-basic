function sortProducts(products) {
    products.sort((a, b) => a.price - b.price);
    return products;
}

var products = [
    {id: 1, product_name: 'Product 1', price: 200},
    {id: 2, product_name: 'Product 2', price: 100},
    {id: 3, product_name: 'Product 3', price: 150}
];

let sortedProducts = sortProducts(products);
console.log('Danh sách products tăng dần: ',sortedProducts);