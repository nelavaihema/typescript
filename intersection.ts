type Person = {
  name: string;
};

type Employee = {
  empId: number;
};

type Staff = Person & Employee;

let staff1: Staff = {
  name: "Hema",
  empId: 1001
};

console.log(staff1);