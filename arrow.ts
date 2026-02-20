const add = (a = 0, b = 0) => {
  return a + b;
};

console.log(add(5, 3));  // 8
console.log(add(5));     // 5
console.log(add());      // 0


interface User {
  name: string;
  age: number;
}

const showUser = (
  user: User = { name: "Guest", age: 0 }
) => {
  console.log(user.name + " - " + user.age);
};

showUser({ name: "Hema", age: 23 });
showUser();  // uses default