function myFunction() {
  var x, message;
  x = document.getElementById("positiveInteger").value;

  let remainder = (x % 2)

  if (x == 0) {
    console.log(`${x} is even`)
  
  } else {

    console.log(`${x} is Odd`)
  
    message = "";
    for (i = 0; i < x; i += 2) {
      message += i + " ";
    }
    document.getElementById("evenNumbers").innerHTML = message;
    message = "";
    for (i = 1; i < x; i += 2) {
      message += i + " ";
    }
    document.getElementById("oddNumbers").innerHTML = message;
  }
}