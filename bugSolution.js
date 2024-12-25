function myFunc() {
  let x = 10;
  if (true) {
    let y = 20; // Renamed the variable to avoid shadowing
    console.log(y); // Outputs 20
  }
  console.log(x); // Outputs 10
}

myFunc();