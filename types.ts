
// number type
let age: number = 25;
let price: number = 99.99;
console.log(age, price);

// string type
let name: string = "Hema";
let course: string = "TypeScript";
console.log(name, course);

// template literails
let user: string = "Hema";
let msg: string = `Welcome ${user} to TypeScript`;
console.log(msg);
// boolean
let isActive: boolean = true;
let isCompleted: boolean = false;
console.log(isActive, isCompleted);
// array type
let numbers: number[] = [10, 20, 30];
let fruits: string[] = ["Apple", "Mango", "Orange"];
console.log(numbers, fruits);
//  mixed type
let mixed: (number | string)[] = [1, "Hema", 2, "TS"];
console.log(mixed);
// tuple
let person: [string, number] = ["Hema", 24];
console.log(person);

// any datatype
let data: any = 10;
data = "Hello";
data = false;
console.log(data);

// function
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3));

