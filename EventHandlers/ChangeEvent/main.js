const myInput = document.getElementById("myInput");
const output = document.getElementById("output");

//function
myInput.onchange = () => {
  output.textContent = `your change : ${myInput.value}`;
  alert(myInput.value);
};
