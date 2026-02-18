type Student = {
  name: string;
  age: number;
};

let s1: Student = {
  name: "Hema",
  age: 23
};

console.log(s1);

//  union
type ID = number | string;

let userId: ID = 101;
userId = "EMP101";

console.log(userId);