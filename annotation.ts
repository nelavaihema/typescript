//  object type
let student: { name: string; age: number } = {
  name: "Hema",
  age: 23
};
console.log(student);

// array type with <>
let marks: Array<number> = [80, 90];
console.log(marks);

// function retyrn a object
function getUser(): { name: string; age: number } {
  return { name: "Hema", age: 23 };
}
console.log(getUser());
//  array of array
function getMatrix(): number[][] {
  return [[1, 2], [3, 4]];
}
console.log(getMatrix());
//  calculation
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
console.log(calculateTotal(100, 2));

// object type  create reusable object type.
type Product = {
  name: string;
  price: number;
};

let item: Product = {
  name: "Laptop",
  price: 50000
};

console.log(item);
//  arrow
const multiply = (x: number, y: number): number => {
    return x * y;
};

// fun return string
function greet(name: string): string {
    return `Hello ${name}`;
}

console.log(greet("Hema"));

//  void no retun value
function printMessage(message: string): void {
    console.log(message);
}