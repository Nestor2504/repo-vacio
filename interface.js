// interface Person {
//     name: string;
//     age: number;
//     email?: string;
//   }
function printBookInfo(book) {
    // console.log(`Title: ${book.title}`);
    // console.log(`Author: ${book.author}`);
    // console.log(`Pages: ${book.pages}`);
    // console.log(`ISBN: ${book.isbn}`);
    console.log("title:", book.title);
    console.log("author:", book.author);
    console.log("pages:", book.pages);
    console.log("isbn:", book.isbn);
}
// Crea aquí el objeto que cumpla con la interfaz Book
var book = {
    // Completa aquí los valores de las propiedades
    title: "la razon de estar contigo",
    author: "sabato",
    pages: 232,
    isbn: "peru",
};
printBookInfo(book);
