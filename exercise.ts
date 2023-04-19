interface Person {
    name: string;
    age: number;
    email: string;
  }
  
  function printPersonInfo(person: Person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Email: ${person.email}`);
  }
  
  const person: Person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  };
  
  // const perro = {
  //   nombre: "pepe",
  //   edad: "12",
  // }

  printPersonInfo(person);
  
