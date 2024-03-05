let products = [
    {id: 1, productName: 'Iphone12', price: 2000000},
    {id: 2, productName: 'Iphone11', price: 1000000},
    {id: 3, productName: 'Samsung note 10', price: 1500000000},
];

products.sort((a, b) => a.price - b.price);

console.log(products);
