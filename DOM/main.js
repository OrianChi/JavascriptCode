const p = document.querySelector("p"); //using queryselector
//for tag name name , id class in CSS STYLE: #ID ,.CLASS , 'TAG NAME'

p.setAttribute("id", "myPara");
console.log(p);

//ul - li tag
const ul = document.querySelector("ul");

//List is container for containing li tag
const list = document.getElementById("myList");

//create li tag
let index = 0;
let item = `hello`;
const newItem = document.createElement("li");
newItem.innerHTML = `<input type="checkbox" id = "item${index}" >
                      <label for="item${index}">${item}</label>`;
index++;
list.appendChild(newItem);

//B1 : create container ul
//b2 : create li by create elements
//b3: newItem.innerHTML = add tag , id + input checkbox ->label to show value
//B4: ul.appendCHild(newItem)

//Test querySelector
const test = document.querySelector(`p:nth-child(2)`);

console.log(test.textContent);

//if the properties are private or public , how doest it work and its scope
// (within class or global?)
//How can i declare them
//how to extends from other classes , and how does it work ?
