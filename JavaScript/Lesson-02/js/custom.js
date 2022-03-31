// function myFunction(x, y, z) {
//   console.log(x + y + z);
// }

// myFunction(2, 3, 4);
// myFunction(2, 3, 4, 5);

function loopFrom(x, y, z) {
  for (i = x; i < y; i++) {
    console.log(i + ' Hello world');
    if (i == z) {
      //break;
      console.log('Hi there, We have done it again!');
    }
  }
}

loopFrom(1, 10, 5);
