// interface Person {
//     name: string;
//     age: number;
//     email?: string;
//   }

//   function printPersonInfo(person: Person) {
//     console.log(`Name: ${person.name}`);
//     console.log(`Age: ${person.age}`);
//     if (person.email) {
//       console.log(`Email: ${person.email}`);
//     }
//   }
  
//   const person: Person = {
//     name: 'John Doe',
//     age: 30,
//     email: 'john.doe@example.com',
//   };
  
//   printPersonInfo(person);

  interface Book{
    title: string
    author: string
    pages:  number
    isbn: string
 }

  
  function printBookInfo(book: Book) {
    // console.log(`Title: ${book.title}`);
    // console.log(`Author: ${book.author}`);
    // console.log(`Pages: ${book.pages}`);
    // console.log(`ISBN: ${book.isbn}`);

    console.log("title:",book.title);
    console.log("author:",book.author);
    console.log("pages:",book.pages);
    console.log("isbn:",book.isbn);
  }
  
  // Crea aquí el objeto que cumpla con la interfaz Book
  const book: Book = {
    // Completa aquí los valores de las propiedades
    title: "la razon de estar contigo",
    author: "sabato",
    pages: 232,
    isbn: "peru",
 };
  
  printBookInfo(book);