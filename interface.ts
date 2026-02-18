interface Student {
  name: string;
  age: number;
}

let student1: Student = {
  name: "Hema",
  age: 23
};

console.log(student1);

// interface with function
interface Add {
  (a: number, b: number): number;
}

let sum: Add = function (x, y) {
  return x + y;
};

console.log(sum(5, 3));
// interface with object method
interface Person {
  name: string;
  greet(): string;
}

let person1: Person = {
  name: "Hema",
  greet() {
    return `Hello ${this.name}`;
  }
};

console.log(person1.greet());

// 