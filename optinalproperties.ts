interface Student {
  name: string;
  age?: number;   // optional
}

let s1: Student = {
  name: "Hema"
};

console.log(s1);

type Product = {
  name: string;
  discount?: number;
};

let item: Product = {
  name: "Laptop"
};

console.log(item);