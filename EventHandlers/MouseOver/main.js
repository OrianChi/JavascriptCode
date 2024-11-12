const myDiv = document.getElementById("myDiv");
const output = document.getElementById("output");

//function
//Non-parameterized function
myDiv.onmouseover = () => {
  output.textContent = "You're on me";
};
