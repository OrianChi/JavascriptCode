const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


// map method and forEach method to traverse through these arrays and display the menu items on the HTML page.

//Map
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

//For-each
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


//The variable mainCourseItem is initialized as an empty string (''). This variable will be used to accumulate HTML strings generated for each main course menu item.

//Inside the arrow function, an HTML string is composed for each menu item, incorporating the item's content and its corresponding index.

//Then HTML content is updated dynamically by setting the innerHTML property of the HTML element with the ID maincourseMenuItems to the accumulated mainCourseItem string which will insert main course menu items into the specific element within the webpage.

//Iterate dessertMeny
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

//The variable dessertItem is initialized as an empty string (''). This variable serves as a container to accumulate HTML strings generated for each dessert menu item.

//The generated HTML content, composed of individual paragraphs <p> containing dessert menu items with their respective indices, is assigned to the inner HTML of the HTML element identified by the ID dessertMenuItems which will insert the dessert menu items into the specific element within the webpage.

