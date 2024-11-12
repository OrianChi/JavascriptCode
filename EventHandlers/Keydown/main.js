const myInput = document.getElementById("myInput");
const output = document.getElementById("output");

//function
//Parameterized function
myInput.onkeydown = (event) => {
  output.textContent = `You're typing: ${event.key}`;
};
