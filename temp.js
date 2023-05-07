// function foo() {
//   console.log(1);
//   bar().then(() => console.log(2));
// }

// function bar() {
//   console.log(3);
//   return Promise.resolve(4).then((a) => console.log(a));
// }

// console.log(5);
// foo();
// console.log(6);

//combine the above
// console.log(5);
// function foo() {
//   console.log(1);
//   console.log(3);
//   return Promise.resolve(4)
//     .then((a) => {
//       console.log(a);
//     })
//     .then(() => console.log(2));
// }
// foo();
// console.log(6);

const schema = new mongoose.Schema({ name: String });
const Model = mongoose.Model("Model", schema);
const document = new Model({ name: "document" });
