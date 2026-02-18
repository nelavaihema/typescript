// let myName: string = "Hema";
// let age: number = 23;
// let isEmployee: boolean = true;

// console.log("Name:", myName);
// console.log("Age:", age);
// console.log("Is Employee:", isEmployee);


// let user: [string, number] = ["Hema", 23];

// console.log("Username:", user[0]);
// console.log("Age:", user[1]);

// // Interface
// interface Product {
//   id: number;
//   price: number;
// }

// Function
interface Product {
  id: number;
  price: number;
}

function calculateTotal(products: Product[]): number {
  let total: number = 0;

  for (let product of products) {
    total += product.price;
  }

  return total;
}

let items: Product[] = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
];

console.log("Total Price:", calculateTotal(items));