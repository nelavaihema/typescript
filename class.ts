// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet(): void {
//     console.log("Hello " + this.name);
//   }
// }

// const user1 = new User("Hema", 23);
// user1.greet();


// super
class Parent {
  name: string;   // ✅ declare property

  constructor(name: string) {   // ✅ type
    this.name = name;
  }

  greet(): void {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  age: number;   // ✅ declare property

  constructor(name: string, age: number) {  // ✅ types
    super(name);
    this.age = age;
  }

  greet(): void {
    super.greet();
    console.log("Hello from Child");
  }
}

const obj = new Child("Hema", 23);
obj.greet();